import User from "../models/Users.mjs";
import service from "../services/service.user.mjs";

class UserController {
  index = async (req, res) => {
    // #swagger.tags = ['User']
    const users = await service.getAll();
    res.json(users);
  };

  create = async (req, res) => {
    const new_user = await service.insert(req.body);

    if (new_user == false) res.json({ message: "create data failed!" });
    else res.json({ message: "your account has ben saved" });
  };

  show = async (req, res) => {
    const { id } = req.params;

    const user = await service.detail(id);

    if (user) res.json(user);
    else res.json({ message: "user not found!" });
  };

  update = async (req, res) => {
    const { id } = req.params;

    const result = await service.update(id, req.body);
    if (result) res.json(result);
    else res.json({ message: "update data failed" });
  };

  delete = async (req, res) => {
    const { id } = req.params;
    try {
      const del_user = await User.deleteOne({ _id: id });
      res.json({ message: "Delete user success" });
    } catch (error) {
      res.json({ message: error });
    }
  };
}

export default new UserController();
