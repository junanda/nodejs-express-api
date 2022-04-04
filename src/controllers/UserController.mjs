import User from "../models/Users.mjs";

class UserController {
  index = async (req, res) => {
    // fetch data from resource
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json({ message: error });
    }
  };

  create = async (req, res) => {
    const { name, username, password, role } = req.body;
    const new_user = new User({ name, username, password, role });

    try {
      const result = await new_user.save();
      res.json(result);
    } catch (error) {
      res.json({ message: error });
    }
  };

  show = async (req, res) => {
    const { id } = req.params;
    try {
      const data = await User.findOne({ _id: id });
      res.json(data);
    } catch (error) {
      res.json({ message: error });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { name, username, role } = req.body;
    try {
      const userUpdate = await User.updateOne(
        { _id: id },
        {
          name,
          username,
          role,
        }
      );

      res.json(userUpdate);
    } catch (error) {
      res.json({ message: error });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;
    try {
      const del_user = await User.deleteOne({ _id: id });
      res.json({ del_user });
    } catch (error) {
      res.json({ message: error });
    }
  };
}

export default new UserController();
