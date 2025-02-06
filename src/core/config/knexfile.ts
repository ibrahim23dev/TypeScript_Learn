import dotenv from "dotenv";
import  { Knex } from "knex";
dotenv.config();

export const knexConfig: {[key:string]: Knex.Config}={

    development:{
        client:"mysql2",
        connection:{
            host:process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },

    },

    production:{
        client:"mysql2",
        connection:{
            host:process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        },

    },
}