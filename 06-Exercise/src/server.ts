import express from "express";
import authRoutes from "./routes/authRoutes";
import productRoutes from "./routes/productRoutes";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/products", productRoutes);

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
