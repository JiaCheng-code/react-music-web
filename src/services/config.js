const devBaseUrl = "http://123.207.32.32:9001";
const proBaseUrl = "";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseUrl : proBaseUrl;
export const TIME_OUT = 1000;
