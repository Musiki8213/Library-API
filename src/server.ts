import express from 'express';
import { loggerMiddleware } from './middleware/logger';
import { notFoundHandler } from './middleware/error';
import authorRoutes from './routes/authorRoutes';
import bookRoutes from './routes/bookRoutes';

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);

app.use(notFoundHandler);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
