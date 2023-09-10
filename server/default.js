import React from "react";
import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

function defaultData() {
  try {
    Product.insertMany(products);
    console.log("Data imported successfully");
  } catch (error) {
    console.log("Error inserting data...", error.message);
  }
}

export default defaultData;
