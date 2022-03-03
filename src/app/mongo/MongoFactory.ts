import { MongoClient } from "mongodb";

class MongoFactory {
  private static client: Promise<MongoClient>;

  static async create(): Promise<MongoClient> {
    const client = MongoClient.connect("mongodb://mongodb");

    MongoFactory.client = client;
    return await client;
  }

  static async getClient(): Promise<MongoClient> {
    return MongoFactory.client;
  }
}

export default MongoFactory;
