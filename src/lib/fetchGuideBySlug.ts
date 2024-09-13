import { db } from "./db";
import { unstable_noStore as noStore } from "next/cache";

export const fetchGuideBySlug = async (slug: string) => {
  noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const data = await db(`SELECT * FROM guides WHERE slug = $1`, [slug]);
    return data.rows[0];
  } catch (error) {
    console.info(`Error while get data guides ${error}`);
  }
};
