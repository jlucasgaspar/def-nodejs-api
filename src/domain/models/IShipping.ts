export interface IAddress {
    street: string;
    number: string;
    additionalInfo: string;
    neighborhood: string;
    city: string;
    state: string;
}

export interface ILatLng {
    lat: number;
    lng: number;
}

export interface IShipping {
    id: string;
    customerName: string;
    date: Date;
    departureAddress: IAddress;
    arrivalAddress: IAddress;
    arrivalAddressLatLng: ILatLng;
    departureAddressLatLng: ILatLng;
}