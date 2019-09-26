// eslint-disable-next-line eol-last
var express = require('express');
var cors = require('cors');
var app = express();
const childProcess = require('child_process');
app.use(cors());

require('http').createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('Hello from r started by Electron app!')
  const { exec } = childProcess
  exec('npm test')
  
}).listen(9000)
