const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser());

app.use(express.static(__dirname + '/public'));

app.listen(4200, () => {
    console.log('Server On')
})