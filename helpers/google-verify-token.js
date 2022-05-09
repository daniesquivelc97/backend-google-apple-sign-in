const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID =
  "89379683841-re74reu0krtqdgtmtcqpna3g21purfg4.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: [
        CLIENT_ID,
        "89379683841-b2ifotepnm8hsdu7sp3dpqftpi7t4t6a.apps.googleusercontent.com",
      ],
    });
    const payload = ticket.getPayload();
    console.log("========= PAYLOAD =========");
    console.log(payload);
    return {
      name: payload.name,
      picture: payload.picture,
      email: payload.email,
    };
  } catch (error) {
    return null;
  }
};

// const { OAuth2Client } = require("google-auth-library");

// const CLIENT_ID =
//   "89379683841-re74reu0krtqdgtmtcqpna3g21purfg4.apps.googleusercontent.com";

// const client = new OAuth2Client(CLIENT_ID);

// const validarGoogleIdToken = async (token) => {
//   const ticket = await client.verifyIdToken({
//     idToken: token,
//     audience: [
//       CLIENT_ID,
//       "89379683841-b2ifotepnm8hsdu7sp3dpqftpi7t4t6a.apps.googleusercontent.com",
//     ],
//     // Specify the CLIENT_ID of the app that accesses the backend
//     // Or, if multiple clients access the backend:
//     //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
//   });
//   const payload = ticket.getPayload();
//   //   const userid = payload.sub;
//   console.log(payload);
//   // If request specified a G Suite domain:
//   // const domain = payload['hd'];
//   return {};
// };

module.exports = {
  validarGoogleIdToken,
};
