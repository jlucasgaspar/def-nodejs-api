import { CreateShippingInDbUseCase } from './CreateShippingInDbUseCase';
import { FakeGeocodeConverter } from './../../../infra/geocode/fakes/FakeGeocodeConverter';

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
        fakeGeocodeConverter = new FakeGeocodeConverter();
        createShippingInDbUseCase = new CreateShippingInDbUseCase(fakeGeocodeConverter);
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
});