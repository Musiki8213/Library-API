import { Request, Response} from 'express';

export const notFoundHandler = (err: any, req: Request, res: Response, next: Function) => {
  
    res.status(404).json({ message: 'Resource not found' });
    
}