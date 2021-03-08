import { IRequestHandler } from '../protocols/IExpress'

export const cors: IRequestHandler = (req, res, next): void => {
    res.set('access-control-allow-origin', '*')
    res.set('access-control-allow-methods', '*')
    res.set('access-control-allow-headers', '*')

    next()
}