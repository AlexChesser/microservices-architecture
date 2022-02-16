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

## Running the demo

1. build the container for the `hello-world-service` by running the docker command `docker build --tag hello-world` (run this from the root of the hello-world-service folder)
2. run the overall command `docker compose up -d` in order to launch the "cluster"
3. verify that the system works as expected by loading `http://localhost` (you should see the phrase "Hello World!" on page)
4. to view the traefik UI load `http://localhost:8080`
