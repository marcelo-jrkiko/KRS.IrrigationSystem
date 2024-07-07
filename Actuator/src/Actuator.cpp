#include "Actuator.h"
#include "Config.h"
#include <Arduino.h>

ActuatorModel _MY_ACTUATOR;

void powerActuator(bool on) {
    digitalWrite(ACTUATOR_PIN, (on ? LOW : HIGH));
    Serial.print("Actuator set to ");
    Serial.println(on);
}

void setupActuator() {
    pinMode(ACTUATOR_PIN, OUTPUT);
    digitalWrite(ACTUATOR_PIN, HIGH);
}