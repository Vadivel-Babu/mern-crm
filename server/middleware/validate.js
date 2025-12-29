export const validateEmployeeInput = (req, res, next) => {
  const { firstname, lastname, email, password, language, location, status } =
    req.body;

  if (!firstname || !lastname || !email || !language || !location || !status) {
    return res.status(400).json({
      message: "All required fields must be provided",
    });
  }

  const fields = [firstname, lastname, email, language, location, status];

  const hasEmptyField = fields.some(
    (field) => typeof field === "string" && field.trim() === ""
  );

  if (hasEmptyField) {
    return res.status(400).json({
      message: "Input fields cannot be empty",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  if (password && password.length <= 4) {
    return res.status(400).json({
      message: "Password must be greater than 4 characters",
    });
  }

  next();
};
