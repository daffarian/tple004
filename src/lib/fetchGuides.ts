import { db } from "./db";

import { unstable_noStore as noStore } from "next/cache";

export const fetchGuides = async () => {
  noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const data = await db("SELECT slug, title, date FROM guides ORDER BY date DESC");
    return data.rows;
  } catch (error) {
    console.info(`Error while get data guides ${error}`);
  }
};
