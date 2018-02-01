/**
 * @module server
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Node JS server.js
 */
const restify = require('restify');

/** Restify Server */
const server = restify.createServer();

/** Node app listening port */
server.listen(process.env.port || process.env.PORT || 3978, () => {
    console.log('Server started');
});

server.use(require('./configs/crossOrigins'));
/** Get Statics Route */
server.get(/\/statics\/?.*/, restify.serveStatic({ directory: __dirname }));

/** Get Route */
server.get('/conversations', restify.queryParser(), require('./modules/conversations/get'));

/** Get Route */
server.post('/conversations', restify.bodyParser(), require('./modules/conversations/post'));