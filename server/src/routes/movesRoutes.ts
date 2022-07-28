import {Router } from 'express';

class MovesRoutes{
    public router: Router = Router();
    constructor(){
        this.config();

    }
    config(): void {
        this.router.get('/', (req, res) => res.send('Movies'));
    }
}
const movesRoutes = new MovesRoutes();
export default movesRoutes.router;