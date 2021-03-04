import { InvalidParamError, MissingParamError } from '../errors';
import { IHttpRequest } from '../protocols';

interface IFieldsValidation {
    httpRequest: IHttpRequest;
    requiredFields: Array<string>;
}

export const Validator = {
    ensureFieldsAreNotEmpty: ({ httpRequest, requiredFields }: IFieldsValidation): Error | undefined => {
        for (const field of requiredFields) {
            if (Object.keys(httpRequest.body[field]).length === 0 && httpRequest.body[field].constructor === Object) {
                return new MissingParamError(field)
            }

            if (!httpRequest.body[field]) {
                return new MissingParamError(field)
            }
        }
    },

    ensureDateTypeIsValid(date: any): Error | undefined {
        const isDateValid = date instanceof Date ? true : false

        if (!isDateValid) {
            return new InvalidParamError(date);
        }
    }
}