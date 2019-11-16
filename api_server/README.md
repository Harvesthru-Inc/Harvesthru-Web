# Harvesthru Web API Server

## Setup for local development

1. From root of `Harvesthru-Web/api_server` repository, run `npm i`
2. Create a new `.env` file using `.env.example` in root repository as a template: `cp ../.env.example ../.env`.
3. Fill out the `.env`. See the [example file below](#sample-env).
4. Start the Node app: `npm start`.

### Sample `.env`

```
PrivateKey=
URL=
PORT=8000
```

#### Useful Commands

+ `npm test` to run through integration tests
+ `npm start` to run the backend server
+ `npm heroku-postbuild` to build properly on heroku
