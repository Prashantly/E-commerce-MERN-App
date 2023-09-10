import "dotenv/config";
import express from "express";
import indexRoutes from "./routes/index.js";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/mongoose.js";
import { passport, jwtStrategy } from "./config/passport_JWT_strategy.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

//database config
connectDB();

// Get the current directory using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(cors());
// Use the express.json() middleware to parse JSON requests
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));

//initialize passport
passport.use(passport.initialize());

// routes
app.use("/", indexRoutes);

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
