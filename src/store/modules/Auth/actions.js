import axios from '@axios'
let timer;
export default{
    async Auth(context, payload) {
      return new Promise((resolve, reject) => {    
        axios.post("http://localhost:5006/api/users/signin", {
                user_name: payload.userName,
                user_password: payload.password
              }).then( async function (response) {
                 if(response.status == 200){
                    const expiresIn = 5000;
          const expirationDate = new Date().getTime() + expiresIn;
         const data = response.data
          localStorage.setItem('userInfo', JSON.stringify(data));
          localStorage.setItem('tokenExpiration', expirationDate);
      
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
    
        if (expiresIn < 0) {
          return;
        }
    
        timer = setTimeout(function() {
          context.dispatch('autoLogout');
        }, expiresIn);
    
        // if (userData) {
        //   context.commit('SetUserData', userData);
        // }
      },

      logout(context) {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('tokenExpiration');
        clearTimeout(timer);
        context.commit('SetUserData',null);

        
      },
      autoLogout(context) {
        context.dispatch('logout');
        context.commit('SetAutoLogout');
       // router.push({name:'login'})
      }
}