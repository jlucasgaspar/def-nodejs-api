import { IShipping, IAddress } from '../models/IShipping';

export interface IShippingRequest {
    customerName: string;
    date: Date;
    departureAddress: IAddress;
    arrivalAddress: IAddress;
}

export interface ICreateShippingUseCase {
    execute(shippingData: IShippingRequest): Promise<IShipping>;
}