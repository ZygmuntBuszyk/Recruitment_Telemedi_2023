## Frontend for Recruitment Application

## Start with Docker
If you want to start a Docker only around this frontend
application without using docker-compose:

```bash
# build the image
$ docker build -t todo-list-frontend .

# start the container on that image
$ docker run -p 3000:3000 todo-list-frontend

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

# if you want to build the application for production
$ npm run build
```

## Test

```bash
# unit tests
$ npm run test
```

