import { Request, Response } from "express";
import { MongoClient } from "mongodb";

class HealthCheckController {
  constructor(private readonly mongoClient: Promise<MongoClient>) {}

  async run(req: Request, res: Response): Promise<object> {
    const mongoStatus: string =
      (await this.mongoClient).db("blog").databaseName === "blog" ? "ok" : "ko";

    return res.send({ mongo_status: mongoStatus, server_status: "ok" });
  }
}

export default HealthCheckController;
