import { NodeGeocoderConverter } from './NodeGeocoderConverter';

let sut_nodeGeocodeConverter: NodeGeocoderConverter;

const fakeAddress = {
    street: 'Rua Rogerio Karp',
    number: '305',
    additionalInfo: 'apt 203',
    neighborhood: 'Recreio dos Bandeirantes',
    city: 'Rio de Janeiro',
    state: 'Rio de Janeiro'
}

describe('NodeGeocoder Converter', () => {
    beforeAll(() => {
        sut_nodeGeocodeConverter = new NodeGeocoderConverter();
    });

    test('should return lat and lng on success', async () => {
        const { lat, lng } = await sut_nodeGeocodeConverter.addressToLatLng(fakeAddress);
        expect(lat).toBeTruthy();
        expect(lng).toBeTruthy();
    });

    test('should return null if addressToLatLng returns null', async () => {
        jest.spyOn(sut_nodeGeocodeConverter, 'addressToLatLng').mockImplementationOnce(async () =>
            new Promise(resolve => resolve(null))
        );
        const responseError = await sut_nodeGeocodeConverter.addressToLatLng(fakeAddress);
        expect(responseError).toBeNull();
    });
});