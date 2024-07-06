#include <Arduino.h>
#include "Config.h"
#include <EEPROM.h>
#include "FS.h"
#include "StringSplitter.h"
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include "SerialInterpreter.h"
#include "Config.h"
#include "WebApi.h"
#include "Actuator.h"

AsyncWebServer server(80);


void setupWiFi()
{
  Serial.println("Starting the WiFi");
  String ssid = _MY_CONFIG.WIFI_SSID;
  ssid.trim();

  String password = _MY_CONFIG.WIFI_PASSWORD;
  password.trim();

  WiFi.begin(ssid, password);

  _MY_ACTUATOR.State = ActuatorState::Idle;
}

void setup() {
  Serial.begin(19200);
  Serial.println("KRS IRRIGATION ACTUATOR 1.0");

  setupActuator();
  EEPROM.begin(sizeof(CONFIG));
  loadConfig();

  if(_MY_CONFIG.HAS_CONFIG != 256) {
    Serial.println("NEEDS TO BE CONFIGURED!");
  }
  else {
    reportConfigs();

    // -
    setupWiFi();

    // - 
    setupRoutes(server);
    server.begin();
  }
}

void loop() {
  if(_MY_CONFIG.HAS_CONFIG == 256) { // Normal Cycle
    if(_MY_ACTUATOR.State == ActuatorState::Queued) {
       Serial.print("Actuator is starting: ");
       Serial.print(_MY_ACTUATOR.ExpectedDuration);
       Serial.println(" ms");
       powerActuator(true);
       _MY_ACTUATOR.State = ActuatorState::Running;
       _MY_ACTUATOR.StartedAt = millis();
    }
    else if(_MY_ACTUATOR.State == ActuatorState::Running) {
      _MY_ACTUATOR.ElapsedTime = (millis() - _MY_ACTUATOR.StartedAt);
      if(_MY_ACTUATOR.ElapsedTime >= _MY_ACTUATOR.ExpectedDuration) {
          powerActuator(false);
          _MY_ACTUATOR.State = ActuatorState::Idle;
          _MY_ACTUATOR.StartedAt = millis();
      }
    }
  }
  
  // Reads Commands from the Serial
  SerialCommands();
  delay(10);
}