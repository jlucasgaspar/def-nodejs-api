import { IListAllShippingsUseCase } from '../../../domain/useCases/IListAllShippings';
import { HttpResponse } from '../../helpers';
import { IController, IHttpResponse } from '../../protocols';

export class ListAllShippingsController implements IController {
    constructor(private readonly listAllShippingsUseCase: IListAllShippingsUseCase) {}

    public async handle(): Promise<IHttpResponse> {
        try {
            const shippings = await this.listAllShippingsUseCase.execute();

            return HttpResponse.ok(shippings);
        } catch (error) {
            console.error(error);
            return HttpResponse.serverError();
        }
    }
}