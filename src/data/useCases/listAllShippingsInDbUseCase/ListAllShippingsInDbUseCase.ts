import { IShipping } from '../../../domain/models/IShipping';
import { IListAllShippingsUseCase } from '../../../domain/useCases/IListAllShippings';
import { IShippingRepository } from '../../protocols/repositories/IShippingRepository';

export class ListAllShippingsInDbUseCase implements IListAllShippingsUseCase {
    constructor(public readonly shippingRepository: IShippingRepository) {}

    public async execute(): Promise<IShipping[]> {
        const shippings = await this.shippingRepository.listAll();

        if (!shippings) {
            return null;
        }

        return shippings;
    } 
}