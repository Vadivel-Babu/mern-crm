import api from "./axios";

export const createEmployee = (data) => {
  return api.post("/employees", data);
};

export const getEmployees = (page = 1, search = "") => {
  return api.get(`/employees?page=${page}&search=${search}`);
};

export const updateEmployee = (id, data) => {
  return api.put(`/employees/${id}`, data);
};

export const deleteEmployee = (id) => {
  return api.delete(`/employees/${id}`);
};

export const deleteAllEmployees = () => {
  return api.delete("/employees");
};
