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
        const arrivalAddressLatLng = await this.geocodeConverter.addressToLatLng(
            shippingData.arrivalAddress
        );

        const departureAddressLatLng = await this.geocodeConverter.addressToLatLng(
            shippingData.departureAddress
        );

        if (!arrivalAddressLatLng || !departureAddressLatLng) {
            return null;
        }

        const arrivalAddressWithLatLng = Object.assign({}, shippingData.arrivalAddress, {
            lat: arrivalAddressLatLng.lat,
            lng: arrivalAddressLatLng.lng
        });

        const departureAddressWithLatLng = Object.assign({}, shippingData.departureAddress, {
            lat: departureAddressLatLng.lat,
            lng: departureAddressLatLng.lng
        });

        const shipping = await this.shippingRepository.save({
            customerName: shippingData.customerName,
            date: shippingData.date,
            arrivalAddress: arrivalAddressWithLatLng,
            departureAddress: departureAddressWithLatLng
        });

        return shipping;
    } 
}