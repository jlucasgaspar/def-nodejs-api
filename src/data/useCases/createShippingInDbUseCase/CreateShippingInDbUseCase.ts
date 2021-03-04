import { ICreateShippingUseCase, IShippingRequest } from '../../../domain/useCases/ICreateShipping';
import { IShipping } from '../../../domain/models/IShipping';

export class CreateShippingInDbUseCase implements ICreateShippingUseCase {
    public async execute(shippingData: IShippingRequest): Promise<IShipping> {
        return new Promise(res => res(null));
    } 
}