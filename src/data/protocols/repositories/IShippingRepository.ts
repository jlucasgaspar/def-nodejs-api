import { IShipping } from '../../../domain/models/IShipping';

export interface IShippingRepository {
    save(shippingData: Omit<IShipping, 'id'>): Promise<IShipping>;
    listAll(): Promise<IShipping[]>;
}