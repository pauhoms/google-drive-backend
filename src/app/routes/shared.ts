import { Application, Request, Response } from "express";

import { Container } from "../../contexts/shared/infrastructure/Container";
import HealthCheckController from "../controllers/shared/HealthCheckController";

export const shared = (
  app: Application,
  container: Container,
  version: string
): void => {
  app.get(`/api/${version}/status`, async (req: Request, res: Response) => {
    const client: HealthCheckController = container.get(
      "controllers.shared.helth-check"
    );
    await client.run(req, res);
  });
};
