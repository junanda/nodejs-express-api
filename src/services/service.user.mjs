import User from "../models/Users.mjs";

let service = {};

service.getAll = async () => {
  const users = await User.find();

  return users;
};

service.insert = async (data) => {
  const { name, username, password, role } = data;
  const new_user = new User({ name, username, role });
  try {
    User.register(new_user, password, (err, user) => {
      if (err) {
        return false;
        // res.json({success: false, message: `your account could not be saved. Error: ${err}`})
      } else {
        return true;
      }
    });
    // const result = await new_user.save();
    // return result;
  } catch (error) {
    console.error(`Error insert data : ${error}`);
    return false;
  }
};

service.detail = async (id) => {
  try {
    const result = await User.findOne({ _id: id });
    return result;
  } catch (error) {
    console.error(`Erorr : ${error}`);
    return false;
  }
};

service.update = async (id, body) => {
  const { name, username, role } = body;
  try {
    const result = await User.updateOne({ _id: id }, { name, username, role });
    return result;
  } catch (error) {
    console.error(`error update data: ${error}`);
    return false;
  }
};

service.remove = async (id) => {
  try {
    const result = await User.deleteOne({ _id: id });
    return true;
  } catch (error) {
    return false;
  }
};

export default service;
