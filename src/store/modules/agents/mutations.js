export default{
    
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
      },
      ResetCost(state,payload){
        let agent = state.agents.find(i=>i.id == payload)
        agent.cost =0
      }

}