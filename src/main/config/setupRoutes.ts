import { IExpress } from '../protocols/IExpress';
import { shippingRouter } from '../routes/shippingRouter';

export const setupRoutes = (app: IExpress): void => {
    app.use('/api', shippingRouter);
}