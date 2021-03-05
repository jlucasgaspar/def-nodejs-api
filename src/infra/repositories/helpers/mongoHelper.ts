import { Collection, MongoClient } from 'mongodb';


export type ICollection = Collection;

export const MongoHelper = {
    client: null as MongoClient,
    uri: null as string,

    async connect(uri: string): Promise<void> {
        this.uri = uri;

        this.client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    },

    async disconnect(): Promise<void> {
        await this.client.close();
        this.client = null;
    },

    async getCollection(name: string): Promise<ICollection> {
        if (!this.client?.isConnected()) {
            await this.connect(this.uri);
        }

        return this.client.db().collection(name);
    },

    map(collection: any): any {
        const { _id, ...collectionWithout_id } = collection;
    
        return Object.assign({}, collectionWithout_id, { id: _id });
    },

    arrayMap(array: any[]): any[] {
        const arrayWithout_id = [];

        array.map(doc => {
            const { _id, ...docWithout_id } = doc;

            const newDoc = docWithout_id;

            arrayWithout_id.push(newDoc);
        })

        return arrayWithout_id;
    }
}