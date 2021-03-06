import axios from "axios";

import { apiConfig } from "config";
import { getValue } from "utils";

const getAccessToken = async () => {
  try {
    let user: any = await getValue("@user");
    user = JSON.parse(user);
    if (user !== null) {
      // const item = JSON.parse(retrievedItem);
      // console.log(item);
      const authorization = `Bearer ${user?.token}`;
      return authorization;
    }
    return null;
  } catch (error) {
    // Err
  }
};

const loginClient = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Accept: "application/json",
  },
});

const getLoginClient = async () => {
  loginClient.defaults.headers.common.Authorization = await getAccessToken();
  return loginClient;
};

export default getLoginClient;

function getUrl(config: any) {
  if (config?.baseURL) {
    return config.url.replace(config?.baseURL, "");
  }
  return config?.url;
}

// Intercept all requests
loginClient.interceptors.request.use(
  (config: any) => {
    console.log(
      `%c ${config.method.toUpperCase()} - ${getUrl(config)}:`,
      "color: #0086b3; font-weight: bold",
      config,
    );
    return config;
  },
  error => Promise.reject(error),
);

// Intercept all responses
loginClient.interceptors.response.use(
  async response => {
    if (response?.status === 401 || response?.status === 403) {
      try {
        // store.dispatch(getRefreshToken());
        // deleteSensitiveInfo("accessToken");
        // deleteObjectValue("userInfo");
        // store.dispatch({ type: types.LOGOUT.SUCCESS });
      } catch (error) {
        // Error retrieving data
        console.log(error, "logged in client error");
        Promise.reject(error);
      }
    }
    console.log(
      `%c ${response?.status} - ${getUrl(response.config)}:`,
      "color: #008000; font-weight: bold",
      response,
    );
    return response;
  },
  error => {
    console.log(error);
    if (error.response?.status === 403 || error.response?.status === 401) {
      //logout here
    }
    console.log(error, "error console");
    // if (error.response.status === 429) {
    //   Alert.alert("Too many requests. Please try again later.");
    // }
    console.log(
      `%c ${error.response?.status} - ${getUrl(error.response.config)}:`,
      "color: #a71d5d; font-weight: bold",
      error.response,
    );
    return Promise.reject(error);
  },
);
