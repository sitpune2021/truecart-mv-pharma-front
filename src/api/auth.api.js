import axiosInstance from "./axiosInstance";

export const sendOtpAPI = (phone) => {
  return axiosInstance.post("/auth/customer/request-otp", { phone });
};

export const verifyOtpAPI = (payload) => {
  return axiosInstance.post("/auth/customer/verify-otp", payload);
};
