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
});