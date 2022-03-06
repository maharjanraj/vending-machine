# VENDING MACHINE

## VENDING MACHINE

## PROJECT DESCRIPTION

This project is made to simulate how vending machine works. There are two application backend and webapp. Backend is made using Nodejs framework Expressjs. Webapp is made using Reactjs. Here, we are using in memory database i.e. the data will get reset when backend application is restarted.

## Prequisites

You will need docker and docker-compose installed on your machine.
https://docs.docker.com/engine/install/
https://docs.docker.com/compose/install/

## Run using docker

Just run the following command from project root:

```
docker compose up -d
```

The docker-compose.yml file can be found in the project root which uses two services backend and webapp. Both backend and webapp has its own DockerFile.

## Run without docker

Please refer to README.md of each application inside backend and webapp.
