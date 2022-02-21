//@ts-ignore
import axios from "axios";

const baseUrl = "http://rise-rn-test-api.herokuapp.com/api/v1";

export const apiConfig = {
  baseUrl,
};

export const request = axios.CancelToken.source();
