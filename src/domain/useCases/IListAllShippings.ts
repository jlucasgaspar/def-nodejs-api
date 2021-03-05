import { IShipping } from '../models/IShipping';

export interface IListAllShippingsUseCase {
    execute(): Promise<IShipping[]>;
}