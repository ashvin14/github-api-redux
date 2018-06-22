import axios from "axios";
axios.defaults.withCredentials = false;

export default class HttpService {
  static setHttpService(baseUrl) {
    if (typeof baseUrl == "string") this.baseUrl = baseUrl;
    else {
      throw new error("supply string to HTTP service");
    }
  }

  static get(url, params) {
    return axios({
      url,
      params,
      method: "GET",
      baseUrl: this.baseUrl,
      headers: {
        "Content-type": "application/json"
      }
    });
  }

  static post(url, params, object) {
    return axios({
      url: url,
      method: "POST",
      data: body,
      params: params,
      baseURL: this.baseUrl,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
