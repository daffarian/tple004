import { db } from "./db";

export const fetchGuides = async () => {
  try {
    const data = await db("SELECT * FROM guides");
    return data.rows;
  } catch (error) {
    console.info(`Error while get data guides ${error}`);
  }
};
