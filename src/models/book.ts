export interface Book {
  id: string;
  title: string;
  authorId: string;
  year: number;
}

export const books: Book[] = [];
