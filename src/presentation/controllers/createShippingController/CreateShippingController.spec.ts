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

    test('should return 400 if no date is provided', async () => {
        const response = await sut_createShippingController.handle(fakeRequest.noDate);
        expect(response.statusCode).toBe(400);
    });

    test('should return 400 if no valid date type is provided', async () => {
        const response = await sut_createShippingController.handle(fakeRequest.dateIsNotValidDateType);
        expect(response.statusCode).toBe(400);
    });

    test('should return 400 if no arrivalAdress is provided', async () => {
        const response = await sut_createShippingController.handle(fakeRequest.noArrivalAddress);
        expect(response.statusCode).toBe(400);
    });

    test('should return 400 if no departureAdress is provided', async () => {
        const response = await sut_createShippingController.handle(fakeRequest.noDepartureAddress);
        expect(response.statusCode).toBe(400);
    });
});