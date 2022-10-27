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
          values: ["Boy", "Girl", "Men", "Women"],
         
        },
      },
      category: {
        type: String,
        enum: {
          values: ["casuals", "sandals", "athletic", "boots"],
          
        },
      },
      description:{
        type: String,
        required: [true]
      },
      price: {
        type: Number,
        required: [true],
        
      },
      image: {
        type: [String],
      }
    })

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;