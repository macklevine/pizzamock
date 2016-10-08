import express from 'express';
import http from 'http';
import addRoutes from './routes/routes';
import PizzaMock from './pizzamock';

const pizzaMock = new PizzaMock;

const app = express();
addRoutes(app);

const server = http.createServer(app);

if(process.env.USE_MOCK==="true"){
	pizzaMock.initMock();
} 

server.listen(1337, () => console.log('main service listening on port 1337'));
