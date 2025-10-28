import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { books } from '../models/book';

export const getAllBooks = (req: Request, res: Response) => {
  res.json(books);
};

export const getBookById = (req: Request, res: Response) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
};

export const createBook = (req: Request, res: Response) => {
  const { title, authorId, year } = req.body;
  const newBook = { id: uuidv4(), title, authorId, year };
  books.push(newBook);
  res.status(201).json(newBook);
};

export const updateBook = (req: Request, res: Response) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  const { title, authorId, year } = req.body;
  book.title = title ?? book.title;
  book.authorId = authorId ?? book.authorId;
  book.year = year ?? book.year;
  res.json(book);
};

export const deleteBook = (req: Request, res: Response) => {
  const index = books.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Book not found' });
  books.splice(index, 1);
  res.json({ message: 'Book deleted' });
};
