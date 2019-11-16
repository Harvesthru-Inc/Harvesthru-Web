# Harvesthru-Web
Harvesthru is a community focused marketplace platform where users can buy, sell and trade homegrown crops.

### Build Instructions
1. Clone the repository: `git clone https://github.com/Harvesthru-Inc/Harvesthru-Web`.
2. Navigate to the directory: `cd Harvesthru-Web`.
3. Install the necessary dependencies: `npm run install-monorepo` in root directory.
4. Create a new `.env` file using `.env.example` as a template: `cp .env.example .env`.
5. Fill out the `.env`. See the [example file below](#sample-env).
6. For market place app and API server documentation, see READMEs in the respective directories.

#### Sample `.env`
```
PrivateKey=
URL=
PORT=8000
```

#### Useful Commands
+ `npm test` to run through integration tests
+ `npm run install-monorepo` to install all dependencies of this repo

Take a look at [`package.json`](https://github.com/Harvesthru-Inc/Harvesthru-Web/blob/master/package.json) for the actual commands.

### Development procedure

All PRs on feature branches should be merged to the `development` branch. When we create new feature branches, they should be based on `development`.

`master` should reflect what's currently deployed in the production.
