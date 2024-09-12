export type Guide = {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type Guides = Guide[]