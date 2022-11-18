export default{
    //admins
    AddAdmin(state,payload){
        state.admins.push(payload);
      },
      
      EditAdmin(state,payload){
         let admin = state.admins.find(i=>i.id == payload.id);
         admin.name = payload.name;
         admin.username = payload.username;
         admin.password = payload.password;
      },
  
      DeleteAdmin(state,id){
        state.admins = state.admins.filter(i => i.id !==  id);
      },
  
      DeleteAdmins(state){
        state.admins.splice(0,state.admins.length);
      }
}