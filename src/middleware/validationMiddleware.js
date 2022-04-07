module.exports = cekValue = (req, res, next) => {
  if (!req.body.username) {
    return res.json({
      success: false,
      message: "Username was not given from middleware",
    });
  }
  if (!req.body.password) {
    return res.json({
      success: false,
      message: "Password was not given from middleware",
    });
  }

  return next();
};
