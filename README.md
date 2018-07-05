# german-practice

## Deployment
1. Build deployment dist dir.
```
NODE_ENV=production npm run build
node server.js
```
2. Go to localhost:5000 and make sure site is working well.
3. If site is working, stop server.
4. Git add, commit and push your code to master
5. Then to deploy, run `git push heroku master`
6. To troubleshoot any issues or errors, run `heroku logs` to see server logs.

## First Time Heroku setup
`heroku config:set NODE_ENV=production`

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
