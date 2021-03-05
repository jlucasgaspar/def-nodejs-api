import { router } from '../protocols/IExpress';
import { adaptRoute } from '../adapters/expressRouteAdapter';
import { makeCreateShippingController } from '../factories/makeCreateShippingController';

router.post('/shipping', adaptRoute(makeCreateShippingController()));

export const shippingRouter = router;