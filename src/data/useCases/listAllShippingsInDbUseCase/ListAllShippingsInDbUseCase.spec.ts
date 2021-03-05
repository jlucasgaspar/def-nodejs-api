import { IShipping } from '../../../domain/models/IShipping';
import { FakeShippingRepository } from './../../../infra/repositories/ShippingRepository/fakes/FakeShippingRepository';
import { ListAllShippingsInDbUseCase } from './ListAllShippingsInDbUseCase';

let fakeShippingRepository: FakeShippingRepository;
let sut_listAllShippingsInDbUseCase: ListAllShippingsInDbUseCase;

const fakeRequest: Omit<IShipping, 'id'> = {
    customerName: 'valid_name',
    date: new Date(),
    departureAddress: {
        street: 'Rua Rogerio Karp',
        number: '305',
        additionalInfo: 'apt 203',
        neighborhood: 'Recreio dos Bandeirantes',
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro',
        lat: 10,
        lng: 10
    },
    arrivalAddress: {
        street: 'Rua Leonel Magalhães',
        number: '5',
        additionalInfo: 'Casa de baixo',
        neighborhood: 'Charitas',
        city: 'Niterói',
        state: 'Rio de Janeiro',
        lat: 10,
        lng: 10
    }
}

describe('ListAllShippingsInDb UseCase', () => {
    beforeEach(() => {
        fakeShippingRepository = new FakeShippingRepository();
        sut_listAllShippingsInDbUseCase = new ListAllShippingsInDbUseCase(
            fakeShippingRepository
        );
    });

    test('should return an array of shippings on success', async () => {
        await fakeShippingRepository.save(fakeRequest);
        const shippingsList = await sut_listAllShippingsInDbUseCase.execute();
        expect(shippingsList).toBeTruthy();
        expect(shippingsList).toHaveLength(1);
        expect(shippingsList).toEqual([{ ...fakeRequest, id: 'valid_id' }])
    });
});