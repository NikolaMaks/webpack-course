const path = require('path');


module.exports = {
    entry: './src.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
      }
  };