import { FakeShippingRepository } from './../../../../infra/repositories/ShippingRepository/fakes/FakeShippingRepository';
import { IShipping } from '../../../../domain/models/IShipping';
import { IListAllShippingsUseCase } from '../../../../domain/useCases/IListAllShippings';

export class FakeListAllShippingsInDbUseCase implements IListAllShippingsUseCase {
    constructor(private readonly fakeShippingRepository: FakeShippingRepository) {}

    public async execute(): Promise<IShipping[]> {
        const fakeShippingsArray = this.fakeShippingRepository.listAll();

        if (!fakeShippingsArray) {
            return new Promise(resolve => resolve(null));
        }

        return new Promise(resolve => resolve(fakeShippingsArray));
    } 
}