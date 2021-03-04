import { IHttpResponse } from '../protocols';

export const HttpResponse = {
    ok: (data:any): IHttpResponse => ({
        statusCode: 200,
        body: data
    }),

    badRequest: (err: Error): IHttpResponse => ({
        statusCode: 400,
        body: err
    }),

    serverError: (): IHttpResponse => ({
        statusCode: 500,
        body: 'Internal Server Error'
    })
}