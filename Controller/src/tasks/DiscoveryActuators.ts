import "../Startup";
import { getLogger } from "../GlobalContext";
import { ActuatorManager } from "../core/ActuatorManager";

async () => {
  const manager = new ActuatorManager();
  getLogger().info("[TASK] [ACTUATORS] Discovering");
  manager.discovery();
};
