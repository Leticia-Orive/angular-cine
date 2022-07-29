import { request, Request, Response} from 'express';
import pool from '../database';

class MoviesController {

    public async list (req: Request, res: Response) {
        const movies = (await pool).query('SELECT * FROM movies');
        res.json(movies);
    } 
    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const movies = (await pool).query ( 'SELECT * FROM movies WHERE id = ?', [id]);
        if (movies.lenght > 0){
            return res.json(movies[0]);
        }
        res.status(404).json({text: "The movies doesn´t exist"})
    } 

    public async create (req: Request, res: Response): Promise<void>{
        (await pool).query('Insert into get movies set ?', [req.body]);
        console.log(req.body);
        res.json({message: ' movies saved'});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        (await pool).query('DELETE FROM movies WHERE id = ?', [id]);
        res.json({message: 'The movies is delete'})
    }
    public async update (req: Request, res: Response): Promise<void>{
        const {id} = req.params;
        (await pool).query('UPDATE FROM movies set ? WHERE id = ?', [req.body, id]);
        res.json({message: 'The movies is update'});

    }
};

const moviesController = new MoviesController();
export default moviesController;