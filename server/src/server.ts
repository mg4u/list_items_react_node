require('custom-env').env()
if (process.env.type) {
  require('custom-env').env(process.env.type)
}


import express from 'express';
import { sequelize } from './sequelize';

import { IndexRouter } from './controllers/v0/index.router';

import bodyParser from 'body-parser';
import cors from 'cors';

import { V0MODELS } from './controllers/v0/model.index';

(async () => {
  await sequelize.addModels(V0MODELS);
  // sync table
  // await sequelize.sync();
  
})()
  const app = express();
  const port = process.env.PORT || 8000; // default port to listen
  
  app.use(bodyParser.json());
  
  //CORS Should be restricted
  app.use(cors());
  
  app.use('/api/v0', IndexRouter)
  
  // Root URI call
  app.get( "/", async ( req, res ) => {
    res.send( "/api/v0/" );
  } );
  
  
  // Start the Server
  app.listen( port, () => {
    console.clear()
    console.warn( `user server running http://localhost:${ port }` );
    console.log( `press CTRL+C to stop server` );
  } );

  export default app