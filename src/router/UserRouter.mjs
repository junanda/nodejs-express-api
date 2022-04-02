import BaseRouter from "./BaseRouter.mjs";

// Controller
import UserController from "../controllers/UserController.mjs";

class UserRouter extends BaseRouter {
  routes() {
    this.router.get("/", UserController.index);
    this.router.post("/", UserController.create);
    this.router.get("/:id", UserController.show);
    this.router.put("/:id", UserController.update);
    this.router.delete("/:id", UserController.delete);
  }
}

export default new UserRouter().router;
