const mongoConfig = require('../configurations/mongodb');
const awsConfig = require('../configurations/aws');
const mongoose = require('mongoose');
// TODO: authentication
mongoose.connect(mongoConfig.MONGO_URL, {
  useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
const reservationSchema = require('../schema/reservationSchema');
const Reservation = mongoose.model('Reservation', reservationSchema);

const AWS = require('aws-sdk');
const S3 = new AWS.S3({
  accessKeyId: awsConfig.IAM_USER_KEY,
  secretAccessKey: awsConfig.IAM_USER_SECRET,
  Bucket: awsConfig.Bucket
});

// TODO: save and load data
