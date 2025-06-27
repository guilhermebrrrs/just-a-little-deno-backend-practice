import { DI } from "@danielfroz/sloth";
import { ConsoleLog } from "@danielfroz/slog";
import { ObjectId } from "mongodb";
import { User, UserRepository } from "src/models/index.ts";
import { MongoDbService } from "src/services/index.ts";
import { LogType } from "src/utils/types.ts";

export class UserMongoDbRepository implements UserRepository {
  private readonly USER_COLLECTION_NAME = "users";

  private static _instance: UserRepository;

  private log: ConsoleLog;

  private constructor() {
    this.log = DI.inject(LogType);
  }

  public static get instance() {
    if (!UserMongoDbRepository._instance) {
      UserMongoDbRepository._instance = new UserMongoDbRepository();
    }

    return UserMongoDbRepository._instance;
  }

  public async create(data: User) {
    await MongoDbService.instance
      .getclient()
      .then((client) => {
        client.db().collection<User>(this.USER_COLLECTION_NAME).insertOne(data);
      })
      .catch(() => {
        this.log.error("Failure on getting MongoDB client!");
      });
  }

  async update(data: User) {
    await MongoDbService.instance
      .getclient()
      .then((client) => {
        client
          .db()
          .collection<User>(this.USER_COLLECTION_NAME)
          .updateOne({ _id: new ObjectId(data.id) }, { ...data });
      })
      .catch(() => {
        this.log.error("Failure on getting MongoDB client!");
      });
  }

  async delete(data: User) {
    await MongoDbService.instance
      .getclient()
      .then((client) => {
        client
          .db()
          .collection<User>(this.USER_COLLECTION_NAME)
          .deleteOne({ _id: new ObjectId(data.id) });
      })
      .catch(() => {
        this.log.error("Failure on getting MongoDB client!");
      });
  }

  async findByEmail(email: string) {
    const users = await MongoDbService.instance
      .getclient()
      .then((client) =>
        client.db().collection<User>(this.USER_COLLECTION_NAME).find({ email })
      );

    console.log("users", users);
  }
}
