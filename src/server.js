//  importing modules
const express = require('express');

// initialize express
const app = express();

//   settings
app.set('port', process.env.PORT || 3000);

//  routes
app.use(require('./routes/index'))

//  initialize server
app.listen(app.get('port'), () => {
    console.log(`Server on port: ${app.get('port')}`);
})