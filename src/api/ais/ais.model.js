const mongoose = require("mongoose");

const aiSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      logo: { type: String, required: true },
      year: { type: Number},
      developer: { type: String, required: true },
      lenguage: { type: String},
      description: { type: String, required: true, maxlength: 300},
      link: { type: String, required: true},
      repository: {type: String},
      price: { type: String, required: true}
    },
    {
      timestamps: true,
      collection: "ai"
    }
  );
  
  const Ai = mongoose.model("ais", aiSchema);
  module.exports =  Ai;