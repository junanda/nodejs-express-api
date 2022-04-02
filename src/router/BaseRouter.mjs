import Router from "express";
import RInterface from "./RInterface.mjs";

class BaseRouter extends RInterface {
  constructor() {
    super();
    this.router = Router();
    this.routes();
  }
}

export default BaseRouter;
