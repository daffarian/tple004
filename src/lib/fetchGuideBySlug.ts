import { db } from "./db";

export const fetchGuideBySlug = async (slug: string) => {
  try {
    const data = await db(`SELECT * FROM guides WHERE slug = $1`, [slug]);
    return data.rows[0];
  } catch (error) {
    console.info(`Error while get data guides ${error}`);
  }
};
