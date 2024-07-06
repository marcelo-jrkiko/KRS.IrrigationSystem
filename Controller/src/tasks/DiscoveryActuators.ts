import "../Startup";
import { getLogger } from "../GlobalContext";
import { ActuatorManager } from "../core/ActuatorManager";
import { parentPort } from "node:worker_threads";
import process from "node:process";

doJob();

async function doJob() {
  const manager = new ActuatorManager();
  getLogger().info("[TASK] [ACTUATORS] Discovering");
  manager.discovery();

    // signal to parent that the job is done
    if (parentPort) parentPort.postMessage("done");
    else process.exit(0);
};
