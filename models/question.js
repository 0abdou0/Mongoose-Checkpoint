const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    texte: {
      type: String,
    },
    choix: {
      type: Array,
    },
    reponse: {
      type: String,
    },
  },
  { timestamps: true }
);

const question = mongoose.model("question", questionSchema);

module.exports = question;
