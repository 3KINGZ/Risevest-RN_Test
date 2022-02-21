import guestClient from "services/api/guestClient";
import tokenClient from "services/api/tokenClient";
import getLoginClient from "services/api/loggedInClient";

export const register = (data: {
  first_name: string;
  last_name: string;
  email_address: string;
  date_of_birth: Date;
  username?: string;
  phoneNumber?: string;
}) => {
  return guestClient.post("users", data);
};

export const login = (data: { email_address: string; password: string }) => {
  return tokenClient.post("sessions", data);
};

export const createPlan = async (data: {
  plan_name: string;
  target_amount: string;
  maturity_date: string;
}) => {
  const login = await getLoginClient();
  return login.post("plans", data);
};

export const getPlans = async () => {
  const login = await getLoginClient();
  return login.get("plans");
};

export const getUserDetail = async () => {
  const login = await getLoginClient();
  return login.get("sessions");
};

export const getQuote = async () => {
  const login = await getLoginClient();
  return login.get("quotes");
};
