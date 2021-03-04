import { IAddress } from '../../../domain/models/IShipping';

export interface ILatLng {
    lat: number;
    lng: number;
}

export interface IGeocode {
    addressToLatLng(address: IAddress): Promise<ILatLng>;
}