import {
  applicationInitialization,
  controllersInitialization,
  logsInitialization,
} from "src/initialization/index.ts";

logsInitialization()
  .then(applicationInitialization)
  .then(controllersInitialization)
  .catch((e) => {
    console.error("An error ocurred in inicialization process.", e);
  });
