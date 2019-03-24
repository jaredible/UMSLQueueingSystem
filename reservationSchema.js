const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
}, {
  collection: 'queue'
});

exports.queueSchema = reservationSchema;
