import { router } from '../protocols/IExpress';
import { adaptRoute } from '../adapters/expressRouteAdapter';
import { makeCreateShippingController } from '../factories/makeCreateShippingController';
import { makeListAllShippingsController } from '../factories/makeListAllShippingsController';

router.post('/shipping', adaptRoute(makeCreateShippingController()));
router.get('/shipping', adaptRoute(makeListAllShippingsController()));

export const shippingRouter = router;