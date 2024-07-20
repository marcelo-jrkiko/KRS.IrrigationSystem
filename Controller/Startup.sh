#!/bin/bash

ts-node-esm src/Scheduler.ts &
ts-node-esm src/Server.ts
