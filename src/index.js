const express = require("express");
const sequelize = require("./config/db");
const productRoutes = require("./routes/product.routes");
const app = express();


sequelize.sync().then(() => console.log("database connected successfully 🏦"));

app.use(express.json());

app.use("/api/products",productRoutes)

app.listen(3000, () => {
  console.log("Server started on port 3000 🔥");
});

