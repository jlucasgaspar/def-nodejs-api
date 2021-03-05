import { IShipping } from '../../../../domain/models/IShipping';
import { ICollection, MongoHelper } from '../../helpers/mongoHelper';
import { MongoDbShippingRepository } from './MongoDbShippingRepository';

let accountCollection: ICollection;
let sut_mongoDbShippingRepository: MongoDbShippingRepository;

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

describe('MongoDbShipping Repository', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL);
    });

    afterAll(async () => {
        await MongoHelper.disconnect();
    });

    beforeEach(async () => {
        sut_mongoDbShippingRepository = new MongoDbShippingRepository();

        accountCollection = await MongoHelper.getCollection('accounts');
        await accountCollection.deleteMany({});
    });

    test('should return a shipping on save success', async () => {
        const account = await sut_mongoDbShippingRepository.save(fakeRequest);
        expect(account.id).toBeTruthy();
        expect(account.customerName).toBe(fakeRequest.customerName);
    });
});