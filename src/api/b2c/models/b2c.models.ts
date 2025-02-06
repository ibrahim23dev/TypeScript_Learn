import { AbstractModels } from "../../../core/abstracts/abstractModel";

export class B2cModels extends AbstractModels {
  public getAirlineDetails = async (airlineCode: string) => {
    const cacheKey = `airlines${airlineCode}`;

    const cachedData = this.cache.get(cacheKey);
    if (cachedData) return cachedData;

    const airline = await this.db
      .select("name as airline_name", "airline_logo")
      .from("airlines")
      .where("iata_code", airlineCode)
      .first();

    const result = airline || {
      airline_name: "Not available",
      airline_logo: "Not available",
    };

    this.cache.set(cacheKey, result);

    return result;
  };

  // AIRPORT DETAILS BY AIRLINE CODE
  public getAirport = async (itaCode: string) => {
    const cacheKey = `airport_${itaCode}`;

    // Check if the data exists in the cache
    const cachedData = this.cache.get(cacheKey);
    if (cachedData) return cachedData;

    // Fetch data from the database if not in cache
    const [airline] = await this.db
      .select("name", "city", "iata_code")
      .from("airports")
      .where("iata_code", itaCode);

    // Prepare the response
    const result = airline || {
      name: "Not available",
      city: "Not available",
      iata_code: "Not available",
    };

    // Set the data in the cache
    this.cache.set(cacheKey, result);

    return result;
  };

  // get city
  public async getCity(cityCode: string) {
    const cacheKey = `city_${cityCode}`;

    // Check if the data exists in the cache
    const cachedData = this.cache.get(cacheKey);
    if (cachedData) {
      return cachedData;
    }

    // Fetch data from the database if not in cache
    const [city] = await this.db
      .select("name as city")
      .from("city")
      .where("city_code", cityCode);

    const result = city?.city || "Not available";

    // Set the data in the cache
    this.cache.set(cacheKey, result);

    return result;
  }
}
