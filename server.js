
var statik = require('statik');
var options = {
    port: 3000,
    root: './app'
};

statik(options);

console.log('Running server at: %s', JSON.stringify(options));
