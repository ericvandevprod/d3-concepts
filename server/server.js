const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const host = process.env.HOST || '127.0.0.1';

app.use(express.static(path.join(__dirname, './../src')));

app.listen(port, host, () => {
  console.log(`Server now running on ${host}:${port}`);
});