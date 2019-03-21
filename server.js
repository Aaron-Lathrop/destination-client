'use strict';
require('dotenv').config();
const path = require('path');
const compression = require('compression');

const mongoose = require('mongoose');
const morgan = require('morgan');

mongoose.Promise = global.Promise;

const { router: usersRouter } = require('./users');
const { router: tripsRouter } = require('./trips');
const { router: authRouter, localStrategy, jwtStrategy } = require('./auth');
const { PORT, DATABASE_URL} = require('./config');

const express = require('express');
const app = express();
const passport = require('passport');

const dev = app.get('env') !== 'production';

if(!dev) {
    app.disable('x-powered-by');
    app.use(compression());
    app.use(morgan('dev'));
    app.use(express.json());

    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
      res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
      if(req.method === 'OPTIONS'){
          return res.sendStatus(204);
      }
      next();
    });
  
    passport.use(localStrategy);
    passport.use(jwtStrategy);
    
    app.use('/users', usersRouter);
    app.use('/trips', tripsRouter);
    app.use('/auth', authRouter);

    app.use(express.static(path.resolve(__dirname, 'build')));

    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });

}

if(dev) {
    app.use(morgan('dev'));
}


app.get('*', (req, res) => {
  return res.redirect('/');
})

let server;

function runServer(databaseUrl, port = PORT) {
    return new Promise((resolve, reject) => {
      mongoose.set('useCreateIndex', true)
      mongoose.connect(databaseUrl, { useNewUrlParser: true }, err => {
        if (err) {
          return reject(err);
        }
        server = app.listen(port, () => {
          console.log(`Your app is listening on port ${port}`);
          resolve();
        })
          .on('error', err => {
            mongoose.disconnect();
            reject(err);
          });
      });
    });
  }

function closeServer() {
    return mongoose.disconnect()
            .then(() => {
                return new Promise((resolve,reject) => {
                    console.log('Closing server');
                    server.close(err => {
                        if(err) {
                            return reject(err);
                        }
                        resolve()
                    });
                });
            });
}

if(require.main === module) {
    runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer, server};