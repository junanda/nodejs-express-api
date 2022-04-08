import jwt from "jsonwebtoken";

class Authentication {
  static generateToken = (id, username, role) => {
    const secret = process.env.JWT_SECRET_KEY || "secret";
    return jwt.sign({ id, username, role }, secret, { expiresIn: "1h" });
  };
}

export default Authentication;
