import request from "../helpers/request";

export const sendEmail = async (message) => {
  const { data, status } = await request.post("/email", message);
  return { data, status };
};
