import express from "express";
import routes from "./routes";
import path from "path";
import cors from "cors";
import { errors } from "celebrate";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(morgan('dev')); //Morgan logger

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(errors());

app.listen(3333, () => {
  console.log("Server running on port 3333");
})
