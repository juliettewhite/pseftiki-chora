const { Schema, model, Model } = require("mongoose");

const guildSchema = new Schema({
  _id: Schema.Types.ObjectId,
  guildId: String,
  guildName: String,
  Year: String,
  guildIcon: { type: String, required: false },
});

module.exports = model("Guild", guildSchema, "guilds");
