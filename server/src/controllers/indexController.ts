import { Request, Response} from 'express';

class IndexController {
    public index(req:Request, res:Response) {
        res.json();
    }
};

export const indexController = new IndexController();
