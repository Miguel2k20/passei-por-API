import express from "express";
import cors from "cors";
import routes from "./routes.js";
import "dotenv/config"; 
import { runMigrate } from "./migrations.js";

const app = express();

app.use(cors());
app.use(express.json());
runMigrate();
app.use(routes);

const start = async () => {
  try {
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });
  } catch (err) {
    console.error("Erro ao iniciar servidor:", err);
    process.exit(1);
  }
};

start();
