import { IShippingRepository } from '../../../../data/protocols/repositories/IShippingRepository';
import { IShipping } from '../../../../domain/models/IShipping';
import { MongoHelper } from '../../helpers/mongoHelper';

export class MongoDbShippingRepository implements IShippingRepository {
    public async save(shippingData: Omit<IShipping, 'id'>): Promise<IShipping> {
        const shippingCollection = await MongoHelper.getCollection('shipping');

        const result = await shippingCollection.insertOne(shippingData);

        const shippingResult = result.ops[0];

        const shipping = MongoHelper.map(shippingResult);

        return shipping;
    }
    
    public async listAll(): Promise<IShipping[]> {
        const shippingCollection = await MongoHelper.getCollection('shipping');

        const shippings = await shippingCollection.find({}).toArray();

        return shippings;
    }
}