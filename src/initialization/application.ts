import { Application, container } from "@danielfroz/sloth";
import { ExpressFramework } from "@danielfroz/sloth/express";
import { LogType } from "src/utils/types.ts";

export const applicationInitialization = async () => {
  const log = container.resolve(LogType);

  const application = new Application({
    framework: new ExpressFramework(),
    log: log,
  });

  application.start({ port: 3000 }).then(() => {
    log.info("Application Started!");
  });

  return application;
};
