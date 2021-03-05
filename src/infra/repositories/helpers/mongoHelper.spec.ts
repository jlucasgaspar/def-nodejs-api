import { MongoHelper } from './mongoHelper';
import { env } from '../../../main/config/env';

const sut = MongoHelper;

describe('Mongo Helper', () => {
    beforeAll(async () => {
        await sut.connect(env.mongoUrl);
    });

    afterAll(async () => {
        await sut.disconnect();
    });

    test('Should reconnect if mongodb is down', async () => {
        let accountCollection = await sut.getCollection('shipping');
        expect(accountCollection).toBeTruthy();

        await sut.disconnect();
        accountCollection = await sut.getCollection('shipping');
        expect(accountCollection).toBeTruthy();
    });
});