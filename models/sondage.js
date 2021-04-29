const mongoose = require("mongoose");
const { Schema } = mongoose;

const sondageSchema = new Schema(
  {
    sujet: {
      type: String,
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: "question",
      },
    ],
  },
  { timestamps: true }
);

const sondage = mongoose.model("sondage", sondageSchema);

module.exports = sondage;
