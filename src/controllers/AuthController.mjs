import passport from "passport";
import Authentication from "../utils/Authentication.mjs";

class AuthController {
  login = async (req, res) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({
            success: false,
            message: "username or password incorrect",
          });
        } else {
          req.login(user, (err) => {
            if (err) {
              res.json({ success: false, message: err });
            } else {
              const token = Authentication.generateToken(
                user._id,
                user.username,
                user.role
              );

              res.json({
                success: true,
                message: "Authentication successful",
                token,
              });
            }
          });
        }
      }
    })(req, res);
  };
}

export default new AuthController();
