## Harvesthru-Web
Harvesthru is a community focused marketplace platform where users can buy, sell and trade homegrown crops.
### Build Instructions
1. Clone the repository: `git clone https://github.com/Harvesthru-Inc/Harvesthru-Web`.
2. Navigate to the directory: `cd Harvesthru-Web`.
3. Install the necessary dependencies: `npm install`.
4. Create a new `.env` file using `.env.example` as a template: `cp .env.example .env`.
5. Fill out the `.env`. See the [example file below](#sample-env).
8. Start the Node app: `npm start`.
9. Go to client by `cd client` and run `npm start` to start the front-end React project.

#### Sample `.env`
```
PrivateKey=
URL=
PORT=8000
```
#### Useful Commands
+ `npm test` to run through integration tests 
+ `npm start` to run the backend server
+ `npm heroku-postbuild` to build properly on heroku

Take a look at [`package.json`](https://github.com/Harvesthru-Inc/Harvesthru-Web/blob/master/package.json) for the actual commands.