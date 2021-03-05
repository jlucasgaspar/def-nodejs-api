import { app } from '../protocols/IExpress';
import { setupMiddlewares } from './setupMiddlewares';
import { setupRoutes } from './setupRoutes';

setupMiddlewares(app);
setupRoutes(app);

app.get('/', (req, res) => res.json({ ok: true }))

export { app };