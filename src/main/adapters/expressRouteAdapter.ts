import { IRequest, IResponse } from '../protocols/IExpress'
import { IController, IHttpRequest } from '../../presentation/protocols'

export const adaptRoute = (controller: IController) => {
    return async (req: IRequest, res: IResponse) => {
        const httpRequest: IHttpRequest = {
            body: req.body
        }

        const httpResponse = await controller.handle(httpRequest);

        if (httpResponse.statusCode === 200) {
            res.status(httpResponse.statusCode).json(httpResponse.body)
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message
            })
        }
    }
}