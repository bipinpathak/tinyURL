const mongoose = require("mongoose");

const dbString = "";

mongoose.connect(dbString,{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  // we're connected!
  console.log('Connection to database open')
});

db.on('connected', function () {
  console.log('Connection to database connected!');
});

db.on('reconnected', function () {
  console.log('Database reconnected!');
});

db.on('disconnected', function () {
  console.log('Disconnected trying to reconnect')
  mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
})