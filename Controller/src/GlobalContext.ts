import winston from "winston";
import { IServerConfig } from "./core/contracts/IServerConfig";

import * as path from "path";
import * as os from "os";
import * as fs from "fs";
export function getGlobalConfiguration(): IServerConfig {
  return (globalThis as any).GlobalConfiguration;
}

export function getLogger(): winston.Logger {
  return (globalThis as any).GlobalLogger;
}

export function getTempDir() {
  const tempDest = path.resolve(os.tmpdir(), "epbr");

  if (fs.existsSync(tempDest) == false) {
    fs.mkdirSync(tempDest, {
      recursive: true,
    });
  }

  return tempDest;
}
