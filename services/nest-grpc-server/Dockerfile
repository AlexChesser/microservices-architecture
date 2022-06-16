# for tips on how to further differentiate into a dev container vs the "clean production" version follow tips in this article https://www.tomray.dev/nestjs-docker-production
FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
# Creates a "dist" folder with the production build
RUN npm run build

# copy the dependencies and contents of dist into a new container.
# this step prevents the full source code from being deployed on the running container.
FROM node:18-alpine AS procuction
WORKDIR /usr/public
COPY --from=builder /usr/src/app/node_modules ../node_modules
COPY --from=builder /usr/src/app/dist ./
CMD [ "/bin/sh" ]
