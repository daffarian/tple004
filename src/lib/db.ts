import pg from "pg";
const { Pool } = pg;

// koneksi
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: 6543,
  database: process.env.DB_NAME,
});

// query
export async function db(query: string, params: any[] = []) {
  try {
    const result = await pool.query(query, params);
    return result;
  } catch (error) {
    console.error("Database query error:", error);
    throw error; // Re-throw error after logging it
  }
}
