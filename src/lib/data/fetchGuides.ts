import { unstable_noStore as noStore } from "next/cache";
import { db } from "../db";
import { ITEMS_PER_PAGE } from "../utils";

// Fetch Guides
export const fetchGuides = async () => {
  noStore();
  try {
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const data = await db("SELECT * FROM guides ORDER BY date DESC");
    return data.rows;
  } catch (error) {
    console.info(`Error while get data guides ${error}`);
  }
};

// fetch by slug
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

// Filtered Guides
export async function fetchFilteredGuides(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const data = await db(
      `SELECT title, date 
      FROM guides
      WHERE
      title ILIKE '%' || $1 || '%' OR
      date::text ILIKE '%' || $1 || '%'
      ORDER BY date DESC
      LIMIT $2 OFFSET $3;
    `,
      [query, ITEMS_PER_PAGE, offset]
    );

    return data.rows;
  } catch (error) {
    console.error("Error while get filered guides", error);
  }
}

// fetch guide pages
export async function fetchGuidePages(query: string) {
  noStore();
  try {
    const count = await db(
      ` SELECT * 
      FROM guides
      WHERE
      title ILIKE '%' || $1 || '%' OR
      date ILIKE '%' || $1 || '%'
    `,
      [query]
    );
    const totalPages = Math.ceil(Number(count.rowCount) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Error while get total number page of guides", error);
    // throw new Error('Failed to fetch total number of tools.');
  }
}
