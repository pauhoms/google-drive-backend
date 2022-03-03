import MongoFactory from "../../../../src/app/mongo/MongoFactory";

class MongoEnvironmentArranger {
  public static async arrange(): Promise<void> {
    const client = await MongoFactory.getClient();
    if (client !== undefined) client.close();
  }
}

export default MongoEnvironmentArranger;
