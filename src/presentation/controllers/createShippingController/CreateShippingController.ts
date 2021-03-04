import { IController, IHttpRequest, IHttpResponse } from '../../protocols';
import { HttpResponse, Validator } from '../../helpers';
import { createShippingRequiredFields } from './constants/requiredFields';

export class CreateShippingController implements IController {
    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const errorEmptyField = Validator.ensureFieldsAreNotEmpty({
            httpRequest: httpRequest,
            requiredFields: createShippingRequiredFields
        });
        
        if (errorEmptyField) {
            return HttpResponse.badRequest(errorEmptyField);
        }

        const invalidDateError = Validator.ensureDateTypeIsValid(httpRequest.body.date);

        if (invalidDateError) {
            return HttpResponse.badRequest(invalidDateError);
        }

        const { customerName, date, arrivalAddress, departureAddress } = httpRequest.body;

        return new Promise(res => res(null));
    }
}