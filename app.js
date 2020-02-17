const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser());

app.use(express.static('public'));

app.listen(4200, () => {
    console.log('Server On')
})