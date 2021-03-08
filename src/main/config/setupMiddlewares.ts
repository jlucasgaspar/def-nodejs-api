import { IExpress } from '../protocols/IExpress';
import { bodyParser, cors } from '../middlewares';

export const setupMiddlewares = (app: IExpress): void => {
    app.use(cors);
    app.use(bodyParser);
}