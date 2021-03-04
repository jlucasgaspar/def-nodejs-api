import { IShippingRepository } from '../../../../data/protocols/repositories/IShippingRepository';
import { IShipping } from '../../../../domain/models/IShipping';

export class FakeShippingRepository implements IShippingRepository {
    private readonly shippingsArrayInMemory: IShipping[] = [];

    public async save(shippingData: Omit<IShipping, 'id'>): Promise<IShipping> {
        const savedShipping = Object.assign({}, shippingData, { id: 'valid_id' });

        this.shippingsArrayInMemory.push(savedShipping);

        return savedShipping;
    }
    
    public async listAll(): Promise<IShipping[]> {
        return this.shippingsArrayInMemory;
    }
}