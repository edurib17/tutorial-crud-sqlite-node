const Product = require("../models/productModel");

module.exports = {
  async all(request, response) {
    try {
      const products = await Product.findAll();
      response.status(200).json(products);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async create(request, response) {
    try {
      await Product.create(request.body);
      response.status(200).json("product inserted!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async one(request, response) {
    try {
      const id = request.params.id;
      const product = await Product.findOne({ where: { id } });
      if (!product) {
        return response.status(400).json("Product not found");
      }
      response.status(200).json(product);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async update(request, response) {
    try {
      const { name, price, description, category } = request.body;
      const id = request.params.id;
      const product = await Product.findOne({ where: { id } });

      if (!product) {
        return response.status(400).json("Product not found");
      }
      product.name = name;
      product.price = price;
      product.description = description;
      product.category = category;

      await product.save();
      response.status(200).json("product uptated!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  },
  async delete(request,response){
    try {
      const id = request.params.id;
      const product = await Product.destroy({ where: { id } });
      if (!product) {
        return response.status(400).json("Product not found");
      }
      response.status(200).json("product removed!!");
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }
  }
};
