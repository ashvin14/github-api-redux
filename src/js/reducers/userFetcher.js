import services from "../services";

function userFetcher(initialState, action) {
  let newState = {};
  if (action.type === services.UserService.getUserGithubInfoSuccess()) {
    newState = { ...newState, action };
    console.log(action);
  } else if (action.type === services.UserService.failureType.failText) {
    console.log("failed");
  }
  return newState;
}

export default userFetcher;
