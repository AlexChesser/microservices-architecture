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

### frontend

This frontend is a simple `create-react-app` template which lives at the root URL of the hosted site. important to note that this particular container couts as the DEFAULT landing page for the whole app, however other containers with more specific routes can override this landing.

## Running the demo

1. first ensure the containers ahve all been built using the command `docker compose build` from the root folder
2. run the overall command `docker compose up -d` in order to launch the "cluster"
3. verify that the system works as expected by loading the following urls
    1. `http://localhost` you should see a basic REACT page
    1. `http://localhost/nest` you should see "Hello World!"
    1. `http://localhost/api/weatherforecast` you should see a json result
4. to view the traefik UI load `http://localhost:8080`

## TODO

1. refactor so the configuration of urls and endpoints is owned within the scope of the individual app subfolders as opposed to within the scope of a shared docker compose file.
2. discover how to set up various containers within the cluster so they can reload on save/update - that way this setup can be used for a holistic development environment.
1. figure out how to enable _different_ front end pages dynamically (current challenge, different CSS files if referenced from a "root url" would likely reference the content of a different container)
    - possible that requiring frontend pages not use relative paths is the only way to go?
1. figure out certificate signing & TLS
1. add authentication / authorization service, figure out how to have other hosted services consume the internal auth services.
1. add "service mesh" layer for observability, logging, etc...
1. reimplement in kubernetes
1. figure out how to implement "subnetworks" or pod groups within individual microservices so they can have their own data persistence layer and more complex services (perhaps some microservices want event streaming or whatever)
