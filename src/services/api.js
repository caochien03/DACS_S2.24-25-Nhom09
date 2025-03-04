import axios from "../utils/axios-customize";
//auth

export const callLogin = (email, password) => {
  return axios.post("/api/auth/login", {
    email,
    password,
  });
};
export const callLogout = () => {
  return axios.post("/api/auth/logout");
};
// department
export const getAllDepartment = () => {
  return axios.get("/api/departments/");
};
export const addNewDepartment = (code, name, manager) => {
  return axios.post("/api/departments/", { code, name, manager });
};
export const updateDepartment = (id, code, name, manager) => {
  const payload = { code, name };
  if (manager) payload.manager = manager;
  return axios.put(`/api/departments/${id}`, payload);
};
export const deleteDepartment = (id) => {
  return axios.delete(`/api/departments/${id}`);
};
export const searchDepartments = (query) => {
  return axios.get(`/api/departments/search?query=${query}`);
};
// user
export const getAvailableManagers = () => {
  return axios.get("/api/users/managers/available");
};
export const getAllUsers = () => {
  return axios.get("/api/users/");
};
export const addNewUser = (name, email, password, role, student) => {
  return axios.post("/api/users/", {
    name,
    email,
    password,
    role,
    student,
  });
};

export const updateUser = (id, password) => {
  return axios.put(`/api/users/${id}`, {
    password,
  });
};
export const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`);
};
export const getStudentWithoutUser = () => {
  return axios.get("/api/students/students-without-user/");
};
// môn học

export const getAllSubjects = () => {
    return axios.get("/api/subjects/");
};
export const addNewSubject = (code, name, credits, department) => {
    return axios.post("/api/subjects/", { code, name, credits, department });
};
export const updateSubject = (id, code, name, credits, department) => {
    return axios.put(`/api/subjects/${id}`, {
        code,
        name,
        credits,
        department,
    });
};
export const deleteSubject = (id) => {
    return axios.delete(`/api/subjects/${id}`);
};
