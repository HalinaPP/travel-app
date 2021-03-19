# Travel-app
Для проверки приложения можно воспользоваться нашим готовым деплоем - [netlify](https://halinapp-travel-app.netlify.app/ru), либо развернуть весь бэк и фронт локально по инструкции ниже.

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```
# Server

## Installing NPM modules 

```
npm install
```

## Running server

```
npm start
```

After starting the app server on port (3005 as default) you can open
in your browser OpenAPI documentation by typing http://localhost:3005/docs/.
For more information about OpenAPI/Swagger please visit https://swagger.io/.

# Database

create .env file and set data

MONGO_CONNECTION_STRING = 'mongo connection'
TOKEN_SECRET = 'some tring'
SALT_ROUNDS = 'some number'
CLOUD_NAME = 'cloudinary name'
CLOUD_APIKEY = 'cloudinary key'
CLOUD_APISECRET = 'cloudinary secret'
SKIP_PREFLIGHT_CHECK=true

# Client

```
cd client/
```

## Running client

```
npm start
```
After starting the app, it opens in your browser.


# Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm test
```

To run only one of all test suites (users, boards or tasks)

```
npm test <suite name>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization (users, boards or tasks)

```
npm run test:auth <suite name>
```

## Development

If you're using VSCode, you can get a better developer experience from integration with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Auto-fix and format

```
npm run lint:fix
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
