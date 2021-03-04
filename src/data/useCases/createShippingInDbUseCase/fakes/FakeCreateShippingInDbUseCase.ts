import { ICreateShippingUseCase, IShippingRequest } from '../../../../domain/useCases/ICreateShipping';
import { IShipping } from '../../../../domain/models/IShipping';

export class FakeCreateShippingInDbUseCase implements ICreateShippingUseCase {
    public async execute(shippingData: IShippingRequest): Promise<IShipping> {
        const fakeShippingFromDb = Object.assign({}, shippingData, {
            id: 'valid_id',
            arrivalAddressLatLng: {
                lat: 10,
                lng: 10
            },
            departureAddressLatLng: {
                lat: 10,
                lng: 10
            }
        });

        return new Promise(resolve => resolve(fakeShippingFromDb));
    } 
}