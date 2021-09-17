#!/bin/bash
DOCKER_NETWORK=$(grep DOCKER_NETWORK .env | cut -d '=' -f2)
cd "$(dirname "$0")"
docker network create $DOCKER_NETWORK