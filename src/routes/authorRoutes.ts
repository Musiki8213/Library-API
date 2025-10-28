import { Router } from 'express';
import { createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor, getBooksByAuthor } from '../controllers/authors';
import { validateAuthor } from '../middleware/validation';

const router = Router();

router.get('/', getAllAuthors);
router.get('/:id', getAuthorById);
router.post('/', validateAuthor, createAuthor);
router.put('/:id', validateAuthor, updateAuthor);
router.delete('/:id', deleteAuthor);
router.get('/:id/books', getBooksByAuthor);

export default router;
