import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { authors } from '../models/author';
import { books } from '../models/book';

export const getAllAuthors = (req: Request, res: Response) => {
  res.json(authors);
};

export const getAuthorById = (req: Request, res: Response) => {
  const author = authors.find(a => a.id === req.params.id);
  if (!author) return res.status(404).json({ error: 'Author not found' });
  res.json(author);
};

export const createAuthor = (req: Request, res: Response) => {
  const { name, bio } = req.body;
  const newAuthor = { id: uuidv4(), name, bio };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
};

export const updateAuthor = (req: Request, res: Response) => {
  const author = authors.find(a => a.id === req.params.id);
  if (!author) return res.status(404).json({ error: 'Author not found' });
  const { name, bio } = req.body;
  author.name = name ?? author.name;
  author.bio = bio ?? author.bio;
  res.json(author);
};

export const deleteAuthor = (req: Request, res: Response) => {
  const index = authors.findIndex(a => a.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Author not found' });
  authors.splice(index, 1);
  res.json({ message: 'Author deleted' });
};

export const getBooksByAuthor = (req: Request, res: Response) => {
  const author = authors.find(a => a.id === req.params.id);
  if (!author) return res.status(404).json({ error: 'Author not found' });
  const authorBooks = books.filter(b => b.authorId === author.id);
  res.json(authorBooks);
};
