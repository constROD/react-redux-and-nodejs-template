# React Redux and Node.js Template
This repo is build with webpack

# Installation
```
git clone https://github.com/constROD/react-redux-and-nodejs-template
cd react-redux-and-nodejs-template
npm install or yarn
```

# Usage
#### For development run api (Node.js) and client (React.js) seperately to watch both api and client when changes occur. ####
```
npm run client:start or yarn client:start
```
```
npm run api:start or yarn api:start
```

#### For production it will build client first then run api and client with the same port to make it one instance. ####
1. `dev:deploy` - it uses node to run. I used this in my local for testing if the build is success 
2. `prod:deploy`- it uses node also but with pm2 to run. I used this on my server if no errors occur.
```
npm run dev:deploy or yarn dev:deploy
```
```
npm run prod:deploy or yarn prod:deploy
```
