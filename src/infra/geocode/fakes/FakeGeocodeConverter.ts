import { IAddress, ILatLng } from '../../../domain/models/IShipping';
import { IGeocode } from './../../../data/protocols/geocode/IGeocode';

export class FakeGeocodeConverter implements IGeocode {
    public async addressToLatLng(address: IAddress): Promise<ILatLng> {
        const addressWithLatLng = Object.assign(address, { lat: 10, lng: 10 });
        
        return new Promise(resolve => resolve(addressWithLatLng));
    }
}