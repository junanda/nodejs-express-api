import BaseRouter from "./BaseRouter.mjs";
import Auth from "../middleware/AuthMiddleware.mjs";

// Controller
import UserController from "../controllers/UserController.mjs";

class UserRouter extends BaseRouter {
  routes() {
    this.router.get("/", Auth, UserController.index);
    this.router.post("/", Auth, UserController.create);
    this.router.get("/:id", Auth, UserController.show);
    this.router.put("/:id", Auth, UserController.update);
    this.router.delete("/:id", Auth, UserController.delete);
  }
}

export default new UserRouter().router;
