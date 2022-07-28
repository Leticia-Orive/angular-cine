import {Router } from 'express';
import moviesController  from '../controllers/moviesController'

class MovesRoutes{
    public router: Router = Router();
    constructor(){
        this.config();

    }
    config(): void {
        this.router.get('/',  moviesController.index);
    }
}
const movesRoutes = new MovesRoutes();
export default movesRoutes.router;