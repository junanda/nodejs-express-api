import BaseRouter from "./BaseRouter.mjs";
import validationMiddleware from "../middleware/validationMiddleware.js";
import AuthController from "../controllers/AuthController.mjs";

class AuthRouter extends BaseRouter {
  routes() {
    this.router.post("/login", validationMiddleware, AuthController.login);
  }
}

export default new AuthRouter().router;
