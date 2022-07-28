import express, { Application } from "express";
import indexRoutes from './routes/indexRoutes';
import movesRoutes from './routes/movesRoutes';
import morgan from 'morgan';
import cors from 'cors';


class Server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config();
        this.route();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use((cors));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))

    }

    route(): void{
        this.app.use('/',indexRoutes);
        this.app.use('api/movies',movesRoutes);

    }
    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        })
    }

}

const server = new Server();
server.start();