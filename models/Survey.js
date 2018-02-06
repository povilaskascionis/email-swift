const mongoose = require('mongoose');
const { Schema } = mongoose;
const recipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  subject: String,
  body: String,
  recipients: [recipientSchema],
  numberOfRecipients: { type: Number, default: 0 },
  1: { type: Number, default: 0 },
  2: { type: Number, default: 0 },
  3: { type: Number, default: 0 },
  4: { type: Number, default: 0 },
  5: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponse: Date
});

mongoose.model('survey', surveySchema);
