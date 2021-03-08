import { IShipping } from '../../../../domain/models/IShipping';
import { ICollection, MongoHelper } from '../../helpers/mongoHelper';
import { MongoDbShippingRepository } from './MongoDbShippingRepository';

let shippingCollection: ICollection;
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
        sut_mongoDbShippingRepository = new MongoDbShippingRepository();
        await MongoHelper.connect(process.env.MONGO_URL);
    });

    afterAll(async () => {
        await MongoHelper.disconnect();
    });

    beforeEach(async () => {
        shippingCollection = await MongoHelper.getCollection('shippings');
        await shippingCollection.deleteMany({});
    });

    test('should return a shipping on save success', async () => {
        const shipping = await sut_mongoDbShippingRepository.save(fakeRequest);
        expect(shipping.id).toBeTruthy();
        expect(shipping.customerName).toBe(fakeRequest.customerName);
    });

    test('should null if save returns null', async () => {
        jest.spyOn(sut_mongoDbShippingRepository, 'save').mockReturnValueOnce(null);
        const nullResponse = await sut_mongoDbShippingRepository.save(fakeRequest);
        expect(nullResponse).toBeNull();
    });

    test('should return an array of shipping on listAll success', async () => {
        const result = await shippingCollection.insertOne(fakeRequest);
        const shipping = result.ops[0];

        const shippingsArray = await sut_mongoDbShippingRepository.listAll();

        expect(shippingsArray).toBeTruthy();
        expect(shippingsArray).toHaveLength(1);
    });

    test('should return an empty array of shipping on listAll if no shipping is saved', async () => {
        //const result = await shippingCollection.insertOne(fakeRequest);
        //const shipping = result.ops[0];
        const shippingsArray = await shippingCollection.find({}).toArray();
        expect(shippingsArray).toBeTruthy();
        expect(shippingsArray).toEqual([]);
    });
    
});