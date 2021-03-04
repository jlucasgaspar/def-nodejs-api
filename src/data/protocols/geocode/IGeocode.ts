import { IAddress, ILatLng } from '../../../domain/models/IShipping';

export interface IGeocode {
    addressToLatLng(address: IAddress): Promise<ILatLng>;
}