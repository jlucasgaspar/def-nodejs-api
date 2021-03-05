import { ListAllShippingsInDbUseCase } from './../../data/useCases/listAllShippingsInDbUseCase/ListAllShippingsInDbUseCase';
import { IController } from '../../presentation/protocols';
import { MongoDbShippingRepository } from '../../infra/repositories/ShippingRepository/implementations/MongoDbShippingRepository';
import { ListAllShippingsController } from '../../presentation/controllers/ListAllShippingsController/ListAllShippingsController';


export const makeListAllShippingsController = (): IController => {
    const shippingRepository = new MongoDbShippingRepository();
    
    const listAllShippingsInDbUseCase = new ListAllShippingsInDbUseCase(
        shippingRepository
    );

    return new ListAllShippingsController(listAllShippingsInDbUseCase);
}