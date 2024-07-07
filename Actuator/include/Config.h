#ifndef CONFIG_H
#define CONFIG_H

struct CONFIG {
    char WIFI_SSID[32];
    char WIFI_PASSWORD[32];
    
    char MY_NAME[8];
    int HAS_CONFIG;    
};

extern CONFIG _MY_CONFIG;

const int ACTUATOR_PIN = 14;

void loadConfig();
void saveConfig();

#endif