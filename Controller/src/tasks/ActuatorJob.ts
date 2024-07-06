import "../Startup";
import { getLogger } from "../GlobalContext";
import { ActuatorManager } from "../core/ActuatorManager";
import { workerData } from 'worker_threads';
import { setTimeout } from "timers/promises";
import { parentPort } from "node:worker_threads";
import process from "node:process";

getLogger().info("[TASK] [ACTUATORS] STARTED");
doJob();

async function doJob() {
  const manager = new ActuatorManager();
  getLogger().info("[TASK] [ACTUATORS] Cycle job");

  const name : string = workerData.ActuatorName;
  const duration : number = workerData.Duration;

  getLogger().info(`[TASK] [ACTUATORS] ${name} for ${duration} seconds`);

  try {
    manager.startActuator(name, duration);
    // WAIT FOR IT TO FINISH
    while(true) {
      await setTimeout(5000);
      const resp = await manager.getActuatorState(name);

      if(resp == 410) {
        getLogger().error("[TASK] [ACTUATORS] Cycle job failed: Actuator dind't not respond in time");
        break;
      } else if(resp == 404) {
          getLogger().error("[TASK] [ACTUATORS] Cycle job failed: Actuator bot found");
          break;        
      }
      else {
        if(resp.State == "IDLE") {
          getLogger().info("[TASK] [ACTUATORS] Cycle job finished");
          break;
        }
      }
    }

  } catch (error) {
    getLogger().error("[TASK] [ACTUATORS] Cycle job failed");
    getLogger().error(error);
  }

    // signal to parent that the job is done
    if (parentPort) parentPort.postMessage("done");
    else process.exit(0);
};
