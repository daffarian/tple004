import { db } from "./db";

import { unstable_noStore as noStore } from "next/cache";

export const fetchGuides = async () => {
  noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const data = await db("SELECT * FROM guides");
    return data.rows;
  } catch (error) {
    console.info(`Error while get data guides ${error}`);
  }
};
