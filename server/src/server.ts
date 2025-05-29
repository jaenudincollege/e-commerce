import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./routes/product.routes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
