export default{
    //admins
GetAdmins(state){
    return state.admins;
  },
  //agents
  GetAgents(state){
    return state.agents;
  },
  GetServicePlaces(state){
    return state.servicePlaces;
  },
  GetClientPayments:(state)=> (id) =>{
    return state.payments.filter(i=>i.agentId == id)
  }
}