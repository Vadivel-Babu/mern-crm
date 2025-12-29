// controllers/adminEmployee.controller.js
import bcrypt from "bcrypt";
import Employee from "../model/employeeModel.js";

const PAGE_SIZE = 8;

export const createEmployee = async (req, res, next) => {
  try {
    const { firstName, lastName, email, language, location } = req.body;

    const hashedPassword = await bcrypt.hash(email, 10);

    const employee = await Employee.create({
      firstName,
      lastName,
      email,
      language,
      location,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      employee,
    });
  } catch (err) {
    next(err);
  }
};

export const getEmployees = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const search = req.query.search || "";

    const query = {
      $or: [
        { firstName: { $regex: search, $options: "i" } },
        { lastName: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    };

    const totalEmployees = await Employee.countDocuments(query);

    const employees = await Employee.find(query)
      .skip((page - 1) * PAGE_SIZE)
      .limit(PAGE_SIZE)
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: employees,
      pagination: {
        currentPage: page,
        totalEmployees,
        totalPages: Math.ceil(totalEmployees / PAGE_SIZE),
      },
    });
  } catch (err) {
    next(err);
  }
};

export const updateEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json({ success: true, employee });
  } catch (err) {
    next(err);
  }
};

export const deleteEmployee = async (req, res, next) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Employee deleted" });
  } catch (err) {
    next(err);
  }
};

export const bulkDeleteEmployees = async (req, res, next) => {
  try {
    await Employee.deleteMany({});

    res.json({
      success: true,
      message: "Employees deleted successfully",
    });
  } catch (err) {
    next(err);
  }
};
