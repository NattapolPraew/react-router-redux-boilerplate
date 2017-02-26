import path from 'path';
import webpack from 'webpack';
import express from 'express';
// import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './webpack.config.js';

const env = process.env.NODE_ENV||'development';
const app = express();
const compiler = webpack(config);





console.log('----------Start Server----------', env);
if(env == 'development'){
	var webpackDevMiddleware = require('webpack-dev-middleware');
	app.use(webpackDevMiddleware(compiler, {
	  publicPath: config.output.publicPath
	}));
}



/*---------------------POST request---------------------*/
app.post('/test', function(req, res){
	res.json({message:'Hellow Post service;'});
});
/*---------------------GET request---------------------*/

// define the folder that will be used for static assets
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', function (req, res) { //can't bypass get
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
})