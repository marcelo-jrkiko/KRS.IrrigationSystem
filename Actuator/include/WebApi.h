#include <ESPAsyncWebServer.h>
#ifndef WEBAPI_H
#define WEBAPI_H

void setupRoutes(AsyncWebServer &server);

void webapi_handle_Index(AsyncWebServerRequest *request);
void webapi_handle_Ping(AsyncWebServerRequest *request);
void webapi_handle_Start(AsyncWebServerRequest *request);
void webapi_handle_Stop(AsyncWebServerRequest *request);
void webapi_handle_getState(AsyncWebServerRequest *request);

#endif