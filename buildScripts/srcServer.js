import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 4000;
const app = express();
const compiler = webpack(config);

//Using webpack
app.use( require('webpack-dev-middleware') (compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/' , (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.get('/users' , (req, res) => {
    res.json([
        {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
        {"id": 2, "firstName": "Wale", "lastName": "Smithey", "email": "wale@gmail.com"},
        {"id": 3, "firstName": "Shade", "lastName": "Smithey", "email": "shade@gmail.com"},
    ]);
})


app.listen(port, (err) => {
    if(err){
        console.log(err);
    }else{
        open(`http://localhost:${port}`);
    }
})
