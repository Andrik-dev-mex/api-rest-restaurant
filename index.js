const express = require('express');

const app = express();

app.set('port',5000);

app.get('/', (req,res,next) => {
    res.send('Servidor Listo!!!');
});

app.listen(app.get('port'), () => { 
    console.log('App on port ' + app.get('port'));
});