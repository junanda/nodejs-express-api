class UserController {
  index = (req, res) => {
    // fetch data from resource
    res.json({ message: "Data from user controller" });
  };

  create = (req, res) => {
    res.json({ message: "create data user" });
  };

  show = (req, res) => {
    const name = req.params.nama;
    res.json({ message: `Data detail ${name}` });
  };

  update = (req, res) => {
    res.json({ message: "update data users" });
  };

  delete = (req, res) => {
    res.json({ message: "deleted data user" });
  };
}

export default new UserController();
