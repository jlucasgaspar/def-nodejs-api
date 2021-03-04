export interface IAddress {
    street: string;
    number: string;
    additionalInfo: string;
    neighborhood: string;
    city: string;
    state: string;
}

export interface IAddressWithLatLng extends IAddress {
    lat: number;
    lng: number;
}

export interface IShipping {
    id: string;
    customerName: string;
    date: Date;
    departureAddress: IAddressWithLatLng;
    arrivalAddress: IAddressWithLatLng;
}