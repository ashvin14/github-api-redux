import HttpService from "./HttpService";

const FAIL_ACTION_TYPE = "API_FAILED";

export default class UserService {
  static getServiceUrl(uri) {
    return HttpService.get(uri);
  }

  static failureType() {
    return {
      failText: FAIL_ACTION_TYPE
    };
  }

  static getUserGithubInfoSuccess() {
    return "USER_INFO_FETCHED";
  }

  static getUserGithubInfo(username) {
    return {
      callApi: {
        types: [
          UserService.getUserGithubInfoSuccess(),
          UserService.failureType().failText
        ],
        apiCall: UserService.getServiceUrl(username)
      }
    };
  }
}
