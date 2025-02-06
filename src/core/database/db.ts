import dotenv from "dotenv";
import knex from "knex";
import { knexConfig } from "../config/knexfile";

dotenv.config();

const environment=process.env.NODE_ENV || "development";

const dbConfig= knexConfig[environment];

const db=knex(dbConfig);

db.raw("SELECT 1").then(()=>{
    console.log(`${process.env.DB_HOST} Database Connection Successful!`)
}).catch((err)=>{
console.error("Failed to Connect the Database:", err);
})

export default db;