import { CreateShippingController } from './CreateShippingController';
import { fakeRequest } from './constants/fakeRequest';

let sut_createShippingController: CreateShippingController;

describe('CreateShipping Controller', () => {
    beforeEach(() => {
        sut_createShippingController = new CreateShippingController();
    });

    test('should return 400 if no customerName is provided', async () => {
        const response = await sut_createShippingController.handle(fakeRequest.noCustomerName);
        expect(response.statusCode).toBe(400);
    });
});