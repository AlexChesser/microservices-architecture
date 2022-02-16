# Microservices Architecture Experiments

## WHY

Dividing a large problem domain into independently developable and deployable modules requires an overall architecture POV.

This project is an attempt to create a viable framework for working in such a manner.

## Design

This project currently has two major parts. The first is the `docker-compose.yaml` file found in the root folder. The second is in the `hello-world-service`

### overall infrastructure

Within the docker compose yaml file there are currently two services configured. The first is a service known as `traefik` and the other is a locally produced demo API (our own arbirtrary code)

#### traefik

This project is what is known as an API gateway. It is a server which monitors the cloud-hosting-environment for services and routes incoming traffic within the hosted application's network.

This allows a large number of servers running _within_ a container-network to all appear on a shared domain URL externally.

#### services

In order to prove the functionality of redirected traffic we need a small number of arbitrary services. This first sample was created using the default nestjs hello-world template with an added `dockerfile`

In order to demonstrate the viability of other languages and frameworks a dotnet `webapi` has also been included. The content of this one can be expected on the `http://localhost/api/weatherforecast` endpoint.

## Running the demo

1. first ensure the containers ahve all been built using the command `docker compose build` from the root folder
2. run the overall command `docker compose up -d` in order to launch the "cluster"
3. verify that the system works as expected by loading the following urls
    1. `http://localhost` you should see a not found page
    1. `http://localhost/nest` you should see "Hello World!"
    1. `http://localhost/api/weatherforecast` you should see a json result
4. to view the traefik UI load `http://localhost:8080`

## TODO

1. create a frontend layer within the same scope of the existing labels system
1. refactor so the configuration of urls and endpoints is owned within the scope of the individual app subfolders as opposed to within the scope of a shared docker compose file.
