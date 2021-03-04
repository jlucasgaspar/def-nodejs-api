import { CreateShippingController } from './CreateShippingController';
import { fakeRequest } from './constants/fakeRequest';
import { FakeCreateShippingInDbUseCase } from './../../../data/useCases/createShippingInDbUseCase/fakes/FakeCreateShippingInDbUseCase';

let fakeCreateShippingInDbUseCase: FakeCreateShippingInDbUseCase;
let sut_createShippingController: CreateShippingController;

describe('CreateShipping Controller', () => {
    beforeEach(() => {
        fakeCreateShippingInDbUseCase = new FakeCreateShippingInDbUseCase()

        sut_createShippingController = new CreateShippingController(
            fakeCreateShippingInDbUseCase
        );
    });

    test('should return 400 if no customerName is provided', async () => {
        const response = await sut_createShippingController.handle(
            fakeRequest.noCustomerName
        );
        expect(response.statusCode).toBe(400);
    });

    test('should return 400 if no date is provided', async () => {
        const response = await sut_createShippingController.handle(
            fakeRequest.noDate
        );
        expect(response.statusCode).toBe(400);
    });

    test('should return 400 if no valid date type is provided', async () => {
        const response = await sut_createShippingController.handle(
            fakeRequest.dateIsNotValidDateType
        );
        expect(response.statusCode).toBe(400);
    });

    test('should return 400 if no arrivalAdress is provided', async () => {
        const response = await sut_createShippingController.handle(
            fakeRequest.noArrivalAddress
        );
        expect(response.statusCode).toBe(400);
    });

    test('should return 400 if no departureAdress is provided', async () => {
        const response = await sut_createShippingController.handle(
            fakeRequest.noDepartureAddress
        );
        expect(response.statusCode).toBe(400);
    });

    test('should call CreateShippingInDbUseCase with correct values', async () => {
        const fakeCreateShippingUseCasepy = jest.spyOn(
            fakeCreateShippingInDbUseCase, 'execute'
        );
        await sut_createShippingController.handle(fakeRequest.valid);
        expect(fakeCreateShippingUseCasepy).toHaveBeenCalledWith(fakeRequest.valid.body);
    });

    test('should return 500 if CreateShippingInDbUseCase throws', async () => {
        jest.spyOn(fakeCreateShippingInDbUseCase, 'execute').mockReturnValueOnce(
            new Promise((res, reject) => reject(new Error()))
        );
        const response = await sut_createShippingController.handle(fakeRequest.valid);
        expect(response.statusCode).toBe(500);
    });

    test('should return 200 if valid params are provided', async () => {
        const shipping = await sut_createShippingController.handle(
            fakeRequest.valid
        );
        expect(shipping.statusCode).toBe(200);
    });
});