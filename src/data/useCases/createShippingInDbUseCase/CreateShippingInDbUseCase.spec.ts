import { FakeShippingRepository } from './../../../infra/repositories/ShippingRepository/fakes/FakeShippingRepository';
import { CreateShippingInDbUseCase } from './CreateShippingInDbUseCase';
import { FakeGeocodeConverter } from './../../../infra/geocode/fakes/FakeGeocodeConverter';

let fakeShippingRepository: FakeShippingRepository;
let fakeGeocodeConverter: FakeGeocodeConverter;
let createShippingInDbUseCase: CreateShippingInDbUseCase;

const fakeRequest = {
    customerName: 'valid_name',
    date: new Date(),
    departureAddress: {
        street: 'Rua Rogerio Karp',
        number: '305',
        additionalInfo: 'apt 203',
        neighborhood: 'Recreio dos Bandeirantes',
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    },
    arrivalAddress: {
        street: 'Rua Leonel Magalhães',
        number: '5',
        additionalInfo: 'Casa de baixo',
        neighborhood: 'Charitas',
        city: 'Niterói',
        state: 'Rio de Janeiro'
    }
}

describe('CreateShippingInDb UseCase', () => {
    beforeEach(() => {
        fakeShippingRepository = new FakeShippingRepository();
        fakeGeocodeConverter = new FakeGeocodeConverter();

        createShippingInDbUseCase = new CreateShippingInDbUseCase(
            fakeGeocodeConverter,
            fakeShippingRepository
        );
    });

    test('should call GeocodeConverter with correct values', async () => {
        const geocodeSpy = jest.spyOn(fakeGeocodeConverter, 'addressToLatLng');
        await createShippingInDbUseCase.execute(fakeRequest);
        expect(geocodeSpy).toHaveBeenCalledWith(fakeRequest.arrivalAddress);
        expect(geocodeSpy).toHaveBeenCalledWith(fakeRequest.departureAddress);
    });

    test('should throw if GeocodeConverter throws', async () => {
        jest.spyOn(fakeGeocodeConverter, 'addressToLatLng').mockImplementationOnce(() =>
            new Promise((res, reject) => reject(new Error()))
        );
        const error = createShippingInDbUseCase.execute(fakeRequest);
        await expect(error).rejects.toThrow();
    });

    test('should return null if GeocodeConverter returns null', async () => {
        jest.spyOn(fakeGeocodeConverter, 'addressToLatLng').mockReturnValueOnce(null);
        const responseNull = await createShippingInDbUseCase.execute(fakeRequest);
        expect(responseNull).toBeNull();
    });

    test('should call ShippingRepository with correct values', async () => {
        const shippingRepositorySpy = jest.spyOn(fakeShippingRepository, 'save');
        await createShippingInDbUseCase.execute(fakeRequest);
        expect(shippingRepositorySpy).toHaveBeenCalledWith(fakeRequest);
    });

    test('should throw if GeocodeConverter throws', async () => {
        jest.spyOn(fakeShippingRepository, 'save').mockImplementationOnce(() =>
            new Promise((res, reject) => reject(new Error()))
        );
        const error = createShippingInDbUseCase.execute(fakeRequest);
        await expect(error).rejects.toThrow();
    });

    test('should return null if GeocodeConverter returns null', async () => {
        jest.spyOn(fakeShippingRepository, 'save').mockReturnValueOnce(null);
        const responseNull = await createShippingInDbUseCase.execute(fakeRequest);
        expect(responseNull).toBeNull();
    });
});