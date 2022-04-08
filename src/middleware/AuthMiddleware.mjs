import jwt from "jsonwebtoken";

const Auth = (req, res, next) => {
  if (!req.headers.authorization) {
    return res
      .status(401)
      .json({ success: false, message: "Not Authenticated" });
  }
  const secret = process.env.JWT_SECRET_KEY;
  const token = req.headers.authorization.split(" ")[1];
  try {
    const credential = jwt.verify(token, secret);
    if (credential) {
      req.app.locals.credential = credential;
      return next();
    }

    return res.json({ success: false, message: "Token InValid" });
  } catch (error) {
    return res.send({ message: error });
  }
};

export default Auth;
