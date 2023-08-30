## Backend for Recruitment Application 

## Start with Docker
If you want to start a Docker only around this backend 
application without using docker-compose:

```bash
# build the image
$ docker build -t todo-list-backend .

# start the container on that image
$ docker run -p 5000:5000 todo-list-backend

```

## Start manually
### Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e
```
