var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = mongoose.SchemaTypes.ObjectId;


var LinkSchema = new Schema({
    id    	 : ObjectId
  , title      : String
  , url      : String
  , description      : String
  , created  : Date
  , tags	 :[String]
  , owner	 : ObjectId
});

module.exports = mongoose.model('Link', LinkSchema);