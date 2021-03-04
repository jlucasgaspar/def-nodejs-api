import { IAddress } from '../../../domain/models/IShipping';

export interface IAddressWithLatLng extends IAddress {
    lat: number;
    lng: number;
}

export interface IGeocode {
    addressToLatLng(address: IAddress): Promise<IAddressWithLatLng>;
}