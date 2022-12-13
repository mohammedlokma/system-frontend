import axios from '@axios'
import router from '../../../router'
let timer;
export default{
    async Auth(context, payload) {
      return new Promise((resolve, reject) => {    
        axios.post("http://localhost:5006/api/users/signin", {
                user_name: payload.userName,
                user_password: payload.password
              }).then( async function (response) {
                 if(response.status == 200){
                    const expiresIn = 3000000;
          const expirationDate = new Date().getTime() + expiresIn;
         const data = response.data
          localStorage.setItem('userInfo', JSON.stringify(data));
          localStorage.setItem('tokenExpiration', expirationDate);
          localStorage.setItem('autoLogout', false);
      
          timer = setTimeout(function() {
            context.dispatch('autoLogout');
          }, expiresIn);
          context.commit('SetUserData', data);
                  resolve(response)
                 }
              })
              .catch(function (error) {
                reject(error.response.data.message)
              });
              
        
            })
       
    },
    tryLogin(context) {
       // const userData = localStorage.getItem('userInfo');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        const expiresIn = +tokenExpiration - new Date().getTime();
        console.log(expiresIn)
    
        if (expiresIn < 0) {
          context.dispatch('autoLogout');
        }
    
        timer = setTimeout(function() {
          context.dispatch('autoLogout');
        }, expiresIn);
        console.log(timer)
        // if (userData) {
        //   context.commit('SetUserData', userData);
        // }
      },

      logout(context) {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('tokenExpiration');
        clearTimeout(timer);
        context.commit('SetUserData',null);
        context.commit('SetLogoutOverTabs');
        
      },
      autoLogout(context) {
        context.dispatch('logout');
        localStorage.setItem('autoLogout',true)
        context.commit('SetAutoLogout');
       // router.push({name:'login'})
      }
}