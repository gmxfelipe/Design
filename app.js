const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser());

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT, () => {
    console.log('Server On')
})