export default{
   GetUserData(state){
    return state.userData
   },
      isAuthenticated(state) {
        return !!state.userData.access_token;
      },
      didAutoLogout(state) {
        return state.didAutoLogout;
      },
      didLogout(state) {
        return state.logoutOverTabs;
      }
}