import { Request, Response, NextFunction } from 'express';
import { authors } from '../models/author';
import { books } from '../models/book';

export const validateAuthor = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Author name is required' });
  next();
};

export const validateBook = (req: Request, res: Response, next: NextFunction) => {
  const { title, authorId, year } = req.body;
  if (!title || !authorId || !year) return res.status(400).json({ error: 'Title, authorId, and year are required' });
  const authorExists = authors.find(a => a.id === authorId);
  if (!authorExists) return res.status(400).json({ error: 'Invalid authorId' });
  const duplicateBook = books.find(b => b.title === title && b.authorId === authorId);
  if (duplicateBook) return res.status(409).json({ error: 'Book already exists for this author' });
  next();
};
