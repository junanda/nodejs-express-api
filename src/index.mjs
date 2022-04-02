import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";

// routes
import UserRouter from "./router/UserRouter.mjs";

class App {
  static app;
  constructor() {
    this.app = express();
    this.plugin();
    this.routes();
  }

  routes() {
    this.app.route("/api/v1/").get((req, res) => {
      res.send("Welcome to server");
    });

    this.app.use("/api/v1/users", UserRouter);
  }

  plugin() {
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(cors());
  }
}

const app = new App().app;
const port = 3000;

app.listen(port, () =>
  console.info(`Server running at http://localhost:${port}`)
);
