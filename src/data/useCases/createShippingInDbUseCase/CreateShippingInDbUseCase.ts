import { IShippingRepository } from './../../protocols/repositories/IShippingRepository';
import { ICreateShippingUseCase, IShippingRequest } from '../../../domain/useCases/ICreateShipping';
import { IShipping } from '../../../domain/models/IShipping';
import { IGeocode } from './../../protocols/geocode/IGeocode';

export class CreateShippingInDbUseCase implements ICreateShippingUseCase {
    public readonly geocodeConverter: IGeocode;
    public readonly shippingRepository: IShippingRepository;

    constructor(geocodeConverter: IGeocode, shippingRepository: IShippingRepository) {
        this.geocodeConverter = geocodeConverter;
        this.shippingRepository = shippingRepository;
    }

    public async execute(shippingData: IShippingRequest): Promise<IShipping> {
        const arrivalAddressWithLatLng = await this.geocodeConverter.addressToLatLng(
            shippingData.arrivalAddress
        );

        const departureAddressWithLatLng = await this.geocodeConverter.addressToLatLng(
            shippingData.departureAddress
        );

        const shipping = await this.shippingRepository.save({
            customerName: shippingData.customerName,
            date: shippingData.date,
            arrivalAddress: arrivalAddressWithLatLng,
            departureAddress: departureAddressWithLatLng
        })

        return null;
    } 
}