class StatusCode {
    static readonly [200] = {
      code: 200,
      message: "Request successfully processed.",
    };
    static readonly [201] = {
      code: 201,
      message: "Resource successfully created.",
    };
    static readonly [202] = {
      code: 202,
      message: "Request accepted but not yet processed.",
    };
    static readonly [204] = {
      code: 204,
      message: "Request successfully processed, no content to return.",
    };
    static readonly [400] = {
      code: 400,
      message: "Bad request, please check the input.",
    };
    static readonly [401] = {
      code: 401,
      message: "Unauthorized, please login first.",
    };
    static readonly [403] = {
      code: 403,
      message: "Forbidden, you do not have access to this resource.",
    };
    static readonly [404] = { code: 404, message: "Resource not found." };
    static readonly [409] = {
      code: 409,
      message: "Conflict, the request could not be completed due to a conflict.",
    };
    static readonly [410] = {
      code: 410,
      message: "Gone, the resource is no longer available.",
    };
    static readonly [422] = {
      code: 422,
      message:
        "Unprocessable entity, the request was well-formed but could not be processed.",
    };
    static readonly [429] = {
      code: 429,
      message: "Too many requests, please try again later.",
    };
    static readonly [500] = {
      code: 500,
      message: "Internal server error, please try again later.",
    };
  }
  
  export default StatusCode;
  