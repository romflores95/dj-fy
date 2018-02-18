var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PartySchema = new Schema(
  {   
    //TODO: generalize so that any number of genres can be added in an array
    date: { type: Date, default: Date.now },
    name: { type: String, default: "NoName" },
    pop: { type: Number, default: 0 },
    hipHop: { type: Number, default: 0 },
    latin: { type: Number, default: 0 },
    edm: { type: Number, default: 0 },
    throwbacks: { type: Number, default: 0 },
    songs: { type: Array, default: [] }
  }
);

//Export model
module.exports = mongoose.model('Party', PartySchema);