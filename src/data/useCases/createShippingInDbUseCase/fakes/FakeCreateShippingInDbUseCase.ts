import { ICreateShippingUseCase, IShippingRequest } from '../../../../domain/useCases/ICreateShipping';
import { IShipping } from '../../../../domain/models/IShipping';
import { IShippingRepository } from '../../../protocols/repositories/IShippingRepository';

export class FakeCreateShippingInDbUseCase implements ICreateShippingUseCase {
    constructor(private readonly shippingRepository: IShippingRepository) {}

    public async execute(shippingData: IShippingRequest): Promise<IShipping> {
        const fakeShippingWithoutId = Object.assign({}, shippingData, {
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

        const fakeShippingWithId = this.shippingRepository.save(fakeShippingWithoutId);

        return new Promise(resolve => resolve(fakeShippingWithId));
    } 
}