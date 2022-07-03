import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import Mongo from "./databases/Mongo.mjs";
import passport from "passport";
import localStrategy from "passport-local";
import session from "express-session";
import swaggerUi from "swagger-ui-express";
import { readFile } from "fs/promises";

// models
import User from "./models/Users.mjs";

// routes
import UserRouter from "./router/UserRouter.mjs";
import AuthRouter from "./router/AuthRouter.mjs";

const swaggerFile = JSON.parse(
  await readFile(new URL("../swagger-output.json", import.meta.url))
);
class App {
  static app;
  constructor() {
    this.app = express();
    this.plugin();
    this.config();
    this.routes();

    Mongo.on("error", console.error.bind(console, "Database connect error"));
    Mongo.once("open", () => console.log("Databases is Connected"));
  }

  routes() {
    // this.app.route("/api/v1/").get((req, res) => {
    //   res.send("Welcome to server");
    // });
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
    this.app.use("/api/v1/users", UserRouter);
    this.app.use("/api/v1/auth", AuthRouter);
  }

  plugin() {
    this.app.use(bodyParser.json());
    this.app.use(morgan("dev"));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(
      session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
      })
    );
    this.app.use(passport.initialize());
    this.app.use(passport.session());
  }

  config() {
    passport.use(new localStrategy(User.authenticate()));
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
  }
}

const app = new App().app;
const port = 3000;

app.listen(port, () =>
  console.info(`Server running at http://localhost:${port}`)
);
