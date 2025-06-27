import { ConsoleLog } from "@danielfroz/slog";
import { container } from "@danielfroz/sloth";
import { LogType } from "src/utils/types.ts";

export const logsInitialization = async () => {
  const log = new ConsoleLog();

  container.register(LogType, { useValue: log });

  log.info("Log service started!");
};
