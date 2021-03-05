import { IController } from '../../presentation/protocols';
import { CreateShippingController } from '../../presentation/controllers/createShippingController/CreateShippingController';
import { CreateShippingInDbUseCase } from '../../data/useCases/createShippingInDbUseCase/CreateShippingInDbUseCase';
import { NodeGeocoderConverter } from '../../infra/geocode/implementations/NodeGeocoderConverter';
import { MongoDbShippingRepository } from '../../infra/repositories/ShippingRepository/implementations/MongoDbShippingRepository';


export const makeCreateShippingController = (): IController => {
    const shippingRepository = new MongoDbShippingRepository();
    const geocodeConverter = new NodeGeocoderConverter();
    
    const createShippingInDbUseCase = new CreateShippingInDbUseCase(
        geocodeConverter,
        shippingRepository
    );

    return new CreateShippingController(createShippingInDbUseCase);
}