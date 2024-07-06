#include "SerialInterpreter.h"
#include <Arduino.h>
#include "StringSplitter.h"
#include "Config.h"
#include <WiFi.h>

void reportConfigs()
{
  if (_MY_CONFIG.HAS_CONFIG)
  {
    Serial.print("Name: ");
    Serial.println(_MY_CONFIG.MY_NAME);
  }
  else
  {
    Serial.println("NEEDS TO BE CONFIGURED!");
  }
}

void wifiStateCommand(String cmd)
{
  wl_status_t status = WiFi.status();
  switch (status)
  {
  case WL_NO_SHIELD:
    Serial.println("WiFI Status: WL_NO_SHIELD");
    break;
  case WL_CONNECT_FAILED:
    Serial.println("WiFI Status: WL_CONNECT_FAILED");
    break;
  case WL_IDLE_STATUS:
    Serial.println("WiFI Status: WL_IDLE_STATUS");
    break;
  case WL_NO_SSID_AVAIL:
    Serial.println("WiFI Status: WL_NO_SSID_AVAIL");
    break;
  case WL_SCAN_COMPLETED:
    Serial.println("WiFI Status: WL_SCAN_COMPLETED");
    break;
  case WL_CONNECTED:
    Serial.println("WiFI Status: WL_CONNECTED");
    break;
    break;
  case WL_CONNECTION_LOST:
    Serial.println("WiFI Status: WL_CONNECTION_LOST");
    break;
  case WL_DISCONNECTED:
    Serial.println("WiFI Status: WL_DISCONNECTED");
    break;
  default:
    Serial.println("WiFI Status: WL_CONNECT_FAILED_2");
    break;
  }

  Serial.print("IP: ");
  Serial.println(WiFi.localIP().toString());
}

void setupCommand(String cmd)
{
  String data = cmd.substring(5);
  int itemCount = getItemCount(data, '|');

  if (itemCount < 3)
  {
    Serial.print("INVALID SET COMMAND: ");
    Serial.print(cmd);
    Serial.print(" = ");
    Serial.println(itemCount);
    return;
  }

  strcpy(_MY_CONFIG.MY_NAME, getItem(data, '|', 0).c_str());
  strcpy(_MY_CONFIG.WIFI_SSID, getItem(data, '|', 1).c_str());
  strcpy(_MY_CONFIG.WIFI_PASSWORD, getItem(data, '|', 2).c_str());
  _MY_CONFIG.HAS_CONFIG = 256;
  saveConfig();
  reportConfigs();

  Serial.println("CONFIGURED, Restart the device!");
}

void SerialCommands()
{
  if (Serial.available() > 0)
  {
    String cmd = Serial.readStringUntil('\n');
    String cmdName = cmd.substring(0, 5);

    if (cmdName.equalsIgnoreCase("#SET="))
    {
      setupCommand(cmd);
    }
    else if (cmdName.equalsIgnoreCase("#GWF="))
    {
      wifiStateCommand(cmd);
    }
  }
}
