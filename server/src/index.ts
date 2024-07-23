const WebSocket = require('ws');

import { Request } from 'express';
import { app } from './app';
import { mongoConnection } from './config/data-source';
import { getCrypto, selectedCoin } from './services/crypto';

let wss: any;

const broadCastData = async function() {
  console.log('broadcasting');
  const data = await getCrypto(selectedCoin);
  wss.clients.forEach(function each(client: any) {

    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
};

const start = async () => {
  try {
    mongoConnection()
      .then(() => {
        console.log('DB Connected.');
      })
      .catch((err) => {
        console.log(`Error connecting to DB. ${err}`);
      })
  } catch(err) {
    console.log(err);
  }
  
  const server = app.listen(3001, () => {
    console.log("Listening on port 3001!!!!!!!!");
  });

  wss = new WebSocket.Server({ server });

  wss.on('message', function incoming(message: any) {
    console.log('received: %s', message);

    wss.clients.forEach(function each(client: any) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  wss.on('connection', function connection(ws: any, req: Request) {
    console.log('A new client Connected!');

    ws.on('message', function incoming(message: any) {
      console.log('received: %s', message);
    });
  });
}

start();

export { broadCastData };