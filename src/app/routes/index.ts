import { Application } from "express";

import container from "./../dependency-injection/index";
import { shared } from "./shared";

export const version = process.env.VERSION || "v1";
export const loadApiEndpoints = (app: Application): void => {
  shared(app, container, version);
};
