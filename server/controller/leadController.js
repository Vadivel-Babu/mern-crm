import Lead from "../model/leadModel.js";
import Employee from "../model/employeeModel.js";

export const createLead = async (req, res, next) => {
  try {
    const { name, email, phone, source, language } = req.body;

    if (!name || !email || !phone || !language) {
      return res.status(400).json({
        message: "Required fields missing",
      });
    }

    const lead = await Lead.create({
      name,
      email,
      phone,
      source,
      language,
    });

    const employee = await Employee.findOne({
      language: language,
      $expr: { $lt: [{ $size: "$assignedLeads" }, 3] },
    });

    if (employee) {
      employee.assignedLeads.push(lead._id);
      lead.assignedTo = employee._id;
      lead.status = "assigned";

      await employee.save();
      await lead.save();

      return res.status(201).json({
        message: "Lead created and auto-assigned successfully",
        lead,
        assignedTo: employee.firstname,
      });
    }

    res.status(201).json({
      message: "Lead created but not assigned (no matching employee)",
      lead,
    });
  } catch (error) {
    next(error);
  }
};

export const getLeadsWithSearchAndPagination = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 8;
    const search = req.query.search || "";

    const searchQuery = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ],
    };

    const totalLeads = await Lead.countDocuments(searchQuery);

    const leads = await Lead.find(searchQuery)
      .populate("assignedTo", "firstname lastname email")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      totalLeads,
      currentPage: page,
      totalPages: Math.ceil(totalLeads / limit),
      leads,
    });
  } catch (error) {
    next(error);
  }
};
