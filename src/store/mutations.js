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
      },

      //agents
      AddAgent(state,payload){
        state.agents.push(payload);
      },
      
      EditAgent(state,payload){
         let agent = state.agents.find(i=>i.id == payload.id);
         agent.name = payload.name;
         agent.username = payload.username;
         agent.password = payload.password;
         agent.servicePlaces = payload.servicePlaces;

      },
  
      DeleteAgent(state,id){
        state.agents = state.agents.filter(i => i.id !==  id);
      },
  
      DeleteAgents(state){
        state.agents.splice(0,state.agents.length);
      },
      
      AddPlace(state,payload){
        state.servicePlaces.push(payload)
      },
      
      DeletePlace(state,id){
        state.servicePlaces = state.servicePlaces.filter(i => i.id !==  id);
      },
  
      DeletePlaces(state){
        state.servicePlaces.splice(0,state.servicePlaces.length);
      },
      AddCost(state,payload){
        let agent = state.agents.find(i=>i.id == payload.id)
        agent.cost += payload.cost
        console.log(typeof(agent.cost))
      }
}