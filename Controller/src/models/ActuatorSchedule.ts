export interface IActuatorSchedule {
    Id: string
    Name: string
    Schedule: string
    Source: string
    Data: IActuatorData,
    Filename: string
  }
  
  export interface IActuatorData {
    ActuatorName: string
    Duration: number
  }
  