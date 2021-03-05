import { IShipping } from '../../../domain/models/IShipping';
import { ListAllShippingsInDbUseCase } from './../../../data/useCases/listAllShippingsInDbUseCase/ListAllShippingsInDbUseCase';
import { FakeShippingRepository } from './../../../infra/repositories/ShippingRepository/fakes/FakeShippingRepository';
import { ListAllShippingsController } from './ListAllShippingsController';

let listAllShippingsInDbUseCase: ListAllShippingsInDbUseCase;
let fakeShippingRepository: FakeShippingRepository;
let sut_listAllShippingsController: ListAllShippingsController;

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

describe('CreateShipping Controller', () => {
    beforeEach(() => {
        fakeShippingRepository = new FakeShippingRepository();
        listAllShippingsInDbUseCase = new ListAllShippingsInDbUseCase(fakeShippingRepository);
        
        sut_listAllShippingsController = new ListAllShippingsController(
            listAllShippingsInDbUseCase
        );
    });

    test('should return an array of shippings on success', async () => {
        await fakeShippingRepository.save(fakeRequest);
        const shippingsList = await sut_listAllShippingsController.handle();
        expect(shippingsList.body).toHaveLength(1);
        expect(shippingsList.body).toEqual([{ ...fakeRequest, id: 'valid_id' }]);
    });
    
});