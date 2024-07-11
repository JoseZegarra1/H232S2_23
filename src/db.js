import { createPool } from "mysql2/promise";

const dbConfig = {
  host: "jose-lab.ctuha4yqxpmx.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Proyectoh6622+",
  port: 3306,
  database: "GRANHOTELVILLADELSUR"
};

export const pool = createPool(dbConfig);
