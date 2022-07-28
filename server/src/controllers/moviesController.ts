import { Request, Response} from 'express';
import pool from '../database';

class MoviesController {
    public async index(req:Request, res:Response) {
        (await pool).query('Describe movies');
        res.json('Movies');
    }
};

const moviesController = new MoviesController();
export  default moviesController;