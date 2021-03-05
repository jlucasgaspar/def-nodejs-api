import NodeGeocoder from 'node-geocoder';
import { env } from '../../../main/config/env';
import { IGeocode, ILatLng } from '../../../data/protocols/geocode/IGeocode';
import { IAddress } from '../../../domain/models/IShipping';

export class NodeGeocoderConverter implements IGeocode {
    public async addressToLatLng(address: IAddress): Promise<ILatLng> {
        const { street, number, neighborhood, city, state } = address;

        const completeAddress = `${street}, ${number} - ${neighborhood} - ${city}, ${state}`;

        const geocoder = NodeGeocoder({
            formatter: null,
            httpAdapter: 'https',
            provider: 'mapquest',
            apiKey: env.geocoderApiKey
        });

        const response = await geocoder.geocode(completeAddress);

        const addressResponse = response[0];

        if (!addressResponse) {
            return null;
        }

        return {
            lat: addressResponse.latitude,
            lng: addressResponse.longitude
        }
    }
}