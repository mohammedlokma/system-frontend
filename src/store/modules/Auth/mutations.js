export default{
  SetUserData(state, payload) {
        state.userData = payload
        state.didAutoLogout = false;
        state.logoutOverTabs = false;

      },
      SetAutoLogout(state) {
        state.didAutoLogout = true;
      },
      SetLogoutOverTabs(state){
        state.logoutOverTabs = true;

      }
}