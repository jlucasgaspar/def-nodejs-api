import { IController, IHttpRequest, IHttpResponse } from '../../protocols';
import { HttpResponse, Validator } from '../../helpers';
import { createShippingRequiredFields } from './constants/requiredFields';
import { ICreateShippingUseCase } from '../../../domain/useCases/ICreateShipping';

export class CreateShippingController implements IController {
    private readonly createShippingUseCase: ICreateShippingUseCase

    constructor(createShippingUseCase: ICreateShippingUseCase) {
        this.createShippingUseCase = createShippingUseCase
    }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const errorEmptyField = Validator.ensureFieldsAreNotEmpty({
            httpRequest: httpRequest,
            requiredFields: createShippingRequiredFields
        });
        
        if (errorEmptyField) {
            //throw new Error('oi');
            return HttpResponse.badRequest(errorEmptyField);
        }

        const invalidDateError = Validator.ensureDateTypeIsValid(httpRequest.body.date);

        if (invalidDateError) {
            return HttpResponse.badRequest(invalidDateError);
        }

        const { customerName, date, arrivalAddress, departureAddress } = httpRequest.body;

        await this.createShippingUseCase.execute(httpRequest.body);
        
        /* const shipping = await this.createShippingUseCase.execute({
            customerName: customerName,
            date: date,
            arrivalAddress: arrivalAddress,
            departureAddress: departureAddress
        }) */

        return new Promise(res => res(null));
    }
}