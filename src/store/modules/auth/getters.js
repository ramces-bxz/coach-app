export default {
  userId(state) {
    return state.userId;
  },
  databaseUrl(state) {
    return state.dbUrl;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};
