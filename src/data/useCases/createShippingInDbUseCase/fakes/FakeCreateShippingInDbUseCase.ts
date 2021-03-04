import { ICreateShippingUseCase, IShippingRequest } from '../../../../domain/useCases/ICreateShipping';
import { IShipping } from '../../../../domain/models/IShipping';

export class FakeCreateShippingInDbUseCase implements ICreateShippingUseCase {
    public async execute(shippingData: IShippingRequest): Promise<IShipping> {
        const fakeShippingFromDb = Object.assign({}, shippingData, {
            id: 'valid_id',
            arrivalAddress: {
                street: shippingData.arrivalAddress.street,
                number: shippingData.arrivalAddress.number,
                neighborhood: shippingData.arrivalAddress.neighborhood,
                additionalInfo: shippingData.arrivalAddress.additionalInfo,
                city: shippingData.arrivalAddress.city,
                state: shippingData.arrivalAddress.state,
                lat: 10,
                lng: 10
            },
            departureAddress: {
                street: shippingData.departureAddress.street,
                number: shippingData.departureAddress.number,
                neighborhood: shippingData.departureAddress.neighborhood,
                additionalInfo: shippingData.departureAddress.additionalInfo,
                city: shippingData.departureAddress.city,
                state: shippingData.departureAddress.state,
                lat: 10,
                lng: 10
            }
        });

        return new Promise(resolve => resolve(fakeShippingFromDb));
    } 
}