export default{
  SetUserData(state, payload) {
        state.userData = payload
        state.didAutoLogout = false;
      },
      SetAutoLogout(state) {
        state.didAutoLogout = true;
      }
}