import { Application, container } from "@danielfroz/sloth";
import {
  AuthenticationController,
  UserController,
} from "src/controllers/index.ts";
import { LogType } from "src/utils/types.ts";

export const controllersInitialization = async (app: Application) => {
  try {
    const log = container.resolve(LogType);

    log.info("Starting controllers!");

    [AuthenticationController, UserController].forEach((controller) => {
      app.Handlers.add(controller);
    });

    console.log("app", app.Handlers);

    log.info(`Controllers started successfully!`);
  } catch (e) {
    throw new Error("Failure in controllers initialization process!");
  }
};
