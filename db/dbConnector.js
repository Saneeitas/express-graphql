const mongoose = require('mongoose');
const { environment } = require('../config/config');
const { friendSchema } = require('./schema/friendSchema.js');
const { seriesSchema } = require('./schema/seriesSchema.js');
const {env} = process.env.NODE_ENV || "development";

/**
 * Mongoose Connection
**/

mongoose.set("strictQuery", true);
mongoose.connect(environment.development.dbString)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch(err => {
    console.error("Error connecting to the database:", err);
  });
  
const Friends = mongoose.model('Friends', friendSchema);
const Series = mongoose.model('Series', seriesSchema);

module.exports = { Friends, Series };