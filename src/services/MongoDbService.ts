import { MongoClient } from "mongodb";

export class MongoDbService {
  private static readonly URL = "mongodb://dbuser:4419855@mongo:27017/";

  private _client: MongoClient | undefined;

  private static _instance: MongoDbService;

  private constructor() {
    this._client = new MongoClient(MongoDbService.URL);

    this._client.connect();
  }

  public static get instance() {
    if (!MongoDbService._instance) {
      MongoDbService._instance = new MongoDbService();
    }

    return MongoDbService._instance;
  }

  public async getclient() {
    if (!this._client) {
      this._client = new MongoClient(MongoDbService.URL);

      await this._client.connect();
    }

    return this._client;
  }
}
