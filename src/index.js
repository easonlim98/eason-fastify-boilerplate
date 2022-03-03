/* import Fastify from 'fastify'
import { v4 as uuidv4 } from "uuid";
import admin from "firebase-admin";
import Multipart from 'fastify-multipart';
import Formbody from 'fastify-formbody';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; */
///CommonJs///
const Fastify = require('fastify');
const { v4 } = require('uuid');
const admin = require('firebase-admin');
const Multipart = require('fastify-multipart');
const Formbody = require('fastify-formbody');
const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url')

//////////////
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
////create module/////
//import { createRequire } from "module";
//const require = createRequire(import.meta.url);
//////////////////////


const firebaseWebApi = require('./config/firebase-web-api.json');

const serviceAccount = require('./config/firebase-sa.json');

console.log(firebaseWebApi.BUCKET_URL);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: firebaseWebApi.BUCKET_URL,
});

const fastify = Fastify({
  logger: true
})

fastify.register(Multipart, {
  addToBody: true
});

fastify.register(Formbody);

fastify.register(require('fastify-cors'));

const RoutesLink = require('./routes/CommonRoutes')
RoutesLink.forEach((route, index) => {
    fastify.route(route)
    console.log(route);
})


  const PORT = 0000;
  ///change your port

  const start = async () => {
    require("dotenv").config();
    try {
  
      await fastify.listen(PORT);
  
      fastify.log.info(`Server listening onto ${fastify.server.address().port}`);
    } catch (err) {
      fastify.log.error(err);
    }  
  };
  
  start();