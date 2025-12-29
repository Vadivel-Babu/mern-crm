import jwt from "jsonwebtoken";

function getToken(id) {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: "2h",
  });
}

export default getToken;
