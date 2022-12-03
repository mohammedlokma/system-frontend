export default{
    
  //agents
  GetAgents(state){
    return state.agents;
  },
  GetServicePlaces(state){
    return state.servicePlaces;
  },
  GetClientPayments:(state)=> (id) =>{
    return state.expenses.
    filter(i=>i.agentId == id)
  },
  GetClientReceipts:(state)=> (id) =>{
    return state.coupons
      .filter(i=>i.agentId == id)
  },
}