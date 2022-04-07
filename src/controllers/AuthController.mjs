import passport from "passport";

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
              // generate token using jwt
              res.json({
                success: true,
                message: "Authentication successful",
              });
            }
          });
        }
      }
    })(req, res);
  };
}

export default new AuthController();
