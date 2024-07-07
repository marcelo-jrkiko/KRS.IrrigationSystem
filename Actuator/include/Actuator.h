#ifndef ACTUATOR_H
#define ACTUATOR_H

enum ActuatorState { 
    Running = 0,
    Idle = 1,
    Queued = 2
};

struct ActuatorModel
{
    // Parameters
    int ExpectedDuration;
    
    // Current State
    int State;
    int ElapsedTime;
    int StartedAt;
};

extern ActuatorModel _MY_ACTUATOR;

void powerActuator(bool on);
void setupActuator();

#endif