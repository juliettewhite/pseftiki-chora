const { Schema, model } = require("mongoose");

const allianceSchema = new Schema({
  _id: Schema.Types.ObjectId,
  CountryA: String,
  CountryB: String
});

module.exports = model("Alliance", allianceSchema, "alliances");
