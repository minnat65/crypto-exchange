import { Schema, Types, model } from "mongoose";

const cryptoSchema = new Schema({
  code: { 
    type: String,
    trim: true,
    require: [true, 'namme is required field.'],
  },
  rate: {
    type: Number,
    require: [true, 'Rate is required.'],
  },
  volume: { type: Number },
  cap: { type: Number },
  delta: { type: Object },
}, {
  timestamps: true,
});

const Crypto = model('Crypto', cryptoSchema);

export { Crypto };
