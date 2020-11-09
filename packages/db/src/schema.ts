import { logger } from "@truffle/db/logger";
const debug = logger("db:schema");

import { definitions } from "./resources";
import { forDefinitions } from "./graphql";

export const schema = forDefinitions(definitions);
