import http from "../http-common";

const create = data => {
  return http.post("/user", data);
}

const getAll = () => {
  return http.get("/user");
};

export default {
  create,
  getAll
};