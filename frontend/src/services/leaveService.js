import api from "./api";

export const createLeave = (data) => {
  return api.post("/leaves", data);
};

export const getLeaves = () => {
  return api.get("/leaves");
};

export const updateLeaveStatus = (id, status) => {
  return api.put(`/leaves/${id}?status=${status}`);
};