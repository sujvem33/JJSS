const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
      name: {
        type: String,
        unique: true,
        required: [true],
        
      },
      gender: {
        type: String,
        required: [true],
        trim: true,
        enum: {
          values: ["boy", "girl", "Men", "Women"],
         
        },
      },
      category: {
        type: String,
        enum: {
          values: ["casuals", "sandals", "athletic", "boots ", "running shoes"],
          
        },
      },
      Description:{
        type: String,
        required: [true]
      },
      price: {
        type: Number,
        required: [true],
        
      },
      images: {
        type: [String],
      }
    })

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;