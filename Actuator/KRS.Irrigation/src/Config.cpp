#include "EEPROM.h"
#include <Arduino.h>
#include "Config.h"

CONFIG _MY_CONFIG;

void loadConfig() {
  EEPROM.get(0, _MY_CONFIG);
}

void saveConfig() {
  EEPROM.put(0, _MY_CONFIG);
  EEPROM.commit();
}
