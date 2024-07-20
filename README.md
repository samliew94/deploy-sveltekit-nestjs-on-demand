# Containerized SvelteKit (web) + NestJS (nest) websocket apps

![1](/screenshots/1.png)

## Goals & Project Roadmap

1. Create the web app [X]
2. Create the nest app [X]
3. Make web talk to nest in real-time via Socket-IO [X]
4. Run containerized web [X]
5. Run containerized nest [X]
6. Create Docker Compose to deploy both contains web & nest [X]
7. Select a Cloud Provider []
8. Launch a Linux VM instance []
9. Create serverless function to start & stop the instance []
10. Create public API endpoints to invoke (9)
11. Guard & Authenticate those endpoints
12. Enable VM to pull source code from this repo
13. TBD...

## So what does it do?

Login, roll a number, and all other connected players will see the sum of self-rolled value.

## Installation (local)

1. install `pnpm` if not yet (`npm i -g pnpm`).
2. in directory `apps/web`, run `pnpm i`.
3. run `pnpm dev`, app will be served at `http://localhost:5173`

## Installation (Docker)

1. install `docker` if not yet from the [official website](https://www.docker.com/products/docker-desktop)
2. in `apps/web`, run `docker build -t web .`
3. run `docker run -p 8080:3000 -e ORIGIN=http://localhost:8080 -e JWT_SECRET=FOO web`
4. app will be served at `http://localhost:8080`

# apps/nest-socket (NestJS)

1. install `pnpm` if not yet (`npm i -g pnpm`).
2. in directory `apps/nest-socket`, run `pnpm i`.
3. run `pnpm dev`, app will be served at `http://localhost:3000`

## Installation (Docker)

1. install `docker` if not yet from the [official website](https://www.docker.com/products/docker-desktop)
2. in `apps/nest-socket`, run `docker build -t nest-socket .`
3. run `docker run -p 8081:3000 -e JWT_SECRET=FOO nest-socket`
4. app will be served at `http://localhost:8081`

## Deploying Both Together (Docker Compose)

Run the command below (assuming on Windows Powershell):

```
$env:WEB_PORT="8080"; `
$env:ORIGIN="http://localhost:8080"; `
$env:JWT_SECRET="FOO"; `
$env:PUBLIC_IO_URL="http://localhost:8081"; `
$env:NEST_PORT="8081"; `
docker compose up --build
```
