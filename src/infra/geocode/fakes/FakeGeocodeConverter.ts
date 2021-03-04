import { IAddress } from '../../../domain/models/IShipping';
import { IGeocode, IAddressWithLatLng } from './../../../data/protocols/geocode/IGeocode';

export class FakeGeocodeConverter implements IGeocode {
    public async addressToLatLng(address: IAddress): Promise<IAddressWithLatLng> {
        const addressWithLatLng = Object.assign(address, { lat: 10, lng: 10 });

        return new Promise(resolve => resolve(addressWithLatLng));
    }
}