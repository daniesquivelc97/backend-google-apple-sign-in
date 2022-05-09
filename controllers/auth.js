const { response } = require("express");
const { validarGoogleIdToken } = require("../helpers/google-verify-token");

const googleAuth = async (req, resp = response) => {
  const token = req.body.token;
  if (!token) {
    return resp.json({
      ok: false,
      msg: "No hay token en la petición",
    });
  }
  const googleUser = await validarGoogleIdToken(token);

  if (!googleUser) {
    return resp.status(400).json({
      ok: false,
    });
  }
  resp.json({
    ok: true,
    googleUser,
  });
};

module.exports = {
  googleAuth,
};
