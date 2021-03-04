import { ICreateShippingUseCase, IShippingRequest } from '../../../domain/useCases/ICreateShipping';
import { IShipping } from '../../../domain/models/IShipping';
import { IGeocode } from './../../protocols/geocode/IGeocode';

export class CreateShippingInDbUseCase implements ICreateShippingUseCase {
    public readonly geocodeConverter: IGeocode;

    constructor(geocodeConverter: IGeocode) {
        this.geocodeConverter = geocodeConverter;
    }

    public async execute(shippingData: IShippingRequest): Promise<IShipping> {
        const arrivalAddressWithLatLng = await this.geocodeConverter.addressToLatLng(shippingData.arrivalAddress);

        const departureAddressWithLatLng = await this.geocodeConverter.addressToLatLng(shippingData.departureAddress);

        return null;
    } 
}