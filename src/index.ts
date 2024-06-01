import express, { Express, Request, Response , Application, NextFunction, Router} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// import Routes
import TableRoutes from './router/TableRoutes';
import CustomerRoutes from './router/CustomerRoutes';
import ReservationRoutes from './router/ReservationRoutes';
import OrderRoutes from './router/OrderRoutes';
import InventoryRoutes from './router/InventoryRoutes';

interface RespError {
    status?: number;
    message?: string;
}

//For env File 
dotenv.config();

let port = parseInt(process.env.PORT || '8080');

class App {
    app : Application;
    

    constructor(port: number) {
        this.app = express();
        let options: cors.CorsOptions = {
            origin: ["*"],
        };

        this.app.use(express.json());
        this.app.use(cors(options));

        this.setRoutes();   

        // Error Handling
        this.errorHandling();
        
        this.app.listen(port, () => {
            console.log(`Server is Fire at http://localhost:${port}`);
        });
    }

    public setRoutes() {
        this.app.use('/tables', TableRoutes.setRoutes());
        this.app.use('/customers', CustomerRoutes.setRoutes());
        this.app.use('/reservations', ReservationRoutes.setRoutes());
        this.app.use('/orders', OrderRoutes.setRoutes());
        this.app.use('/inventory', InventoryRoutes.setRoutes());
    }

    public errorHandling() {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            let err : RespError = {message: "Not found"};
            
            err.status = 404;
            next();
        })

        this.app.use((err: RespError, req: Request, res: Response, next: NextFunction) => {
            res
            .status(err.status || 500)
            .render('error', {
                message: err.message,
            });
        });
    }
}

new App(port)