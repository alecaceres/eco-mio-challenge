module.exports = {
  launch: {
    dumpio: false,
    headless: true,
    product: 'chrome',
    slowMo: 5,
  },
  browserContext: 'default',
  server: {
    command: `webpack serve --mode none --color --hot --progress`, // --config ./webpack/webpack.test.js`, // use it if there's a webpack.test.js available
    port: 3000,
    launchTimeout: 25000,
    debug: true,
  },
};
