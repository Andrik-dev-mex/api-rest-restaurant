const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
require('./database');

app.set('port', 5000);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log('App on port ' + app.get('port'));
});