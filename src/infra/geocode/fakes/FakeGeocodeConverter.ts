import { IAddress } from '../../../domain/models/IShipping';
import { IGeocode, ILatLng } from './../../../data/protocols/geocode/IGeocode';

export class FakeGeocodeConverter implements IGeocode {
    public async addressToLatLng(address: IAddress): Promise<ILatLng> {
        const addressWithLatLng = Object.assign(address, { lat: 10, lng: 10 });

        return new Promise(resolve => resolve({ lat: 10, lng: 10 }));
    }
}