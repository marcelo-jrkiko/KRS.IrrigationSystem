#include "WebApi.h"
#include "ESPAsyncWebServer.h"
#include "Config.h"
#include "Actuator.h"

void setupRoutes(AsyncWebServer &server)
{
    server.on("/", HTTP_GET, [](AsyncWebServerRequest *request)
              { webapi_handle_Index(request); });

    server.on("/ping", HTTP_GET, [](AsyncWebServerRequest *request)
              { webapi_handle_Ping(request); });

    server.on("/start", HTTP_POST, [](AsyncWebServerRequest *request)
              { webapi_handle_Start(request); });

    server.on("/stop", HTTP_POST, [](AsyncWebServerRequest *request)
              { webapi_handle_Stop(request); });

    server.on("/state", HTTP_GET, [](AsyncWebServerRequest *request)
              { webapi_handle_getState(request); });
}

void webapi_handle_Index(AsyncWebServerRequest *request)
{
    String data = "KRS IRRIGATION ACTUATOR";
    data = data + "\r\n VERSION 1.0";
    data = data + "\r\n NAME: ";
    data = data + _MY_CONFIG.MY_NAME;

    request->send(200, "text/plain", data);
}

void webapi_handle_Ping(AsyncWebServerRequest *request)
{
    String data = "KRS_IACTUATOR_10_";
    data = data + _MY_CONFIG.MY_NAME;
    request->send(200, "text/plain", data);
}

void webapi_handle_Start(AsyncWebServerRequest *request)
{
    if (request->hasParam("duration", true))
    {
        AsyncWebParameter *pDuration = request->getParam("duration", true);
        _MY_ACTUATOR.ExpectedDuration = (pDuration->value().toInt() * 1000);
        _MY_ACTUATOR.State = ActuatorState::Queued;
        request->send(200, "text/plain", "Started");
    }
    else
    {
        request->send(400, "text/plain", "Invalid Params");
    }
}

void webapi_handle_Stop(AsyncWebServerRequest *request)
{
    _MY_ACTUATOR.ExpectedDuration = 0; //
    request->send(200, "text/plain", "Stopped");
}

void webapi_handle_getState(AsyncWebServerRequest *request)
{
    String stateData = "CURRENT_STATE=";
    if (_MY_ACTUATOR.State == ActuatorState::Idle)
    {
        stateData = stateData + "IDLE";
    }
    else if (_MY_ACTUATOR.State == ActuatorState::Running)
    {
        stateData = stateData + "RUNNING";
    }
    else if (_MY_ACTUATOR.State == ActuatorState::Queued)
    {
        stateData = stateData + "QUEUED";
    }

    stateData = stateData + "\r\nELAPSED_TIME=";
    stateData = stateData + _MY_ACTUATOR.ElapsedTime;
    request->send(200, "text/plain", stateData);
}