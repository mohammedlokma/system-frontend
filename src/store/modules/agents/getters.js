export default{
    
  //agents
  GetAgents(state){
    return state.agents;
  },
  GetServicePlaces(state){
    return state.servicePlaces;
  },
  GetClientPayments:(state)=> (id) =>{
    return state.payments.
    filter(i=>i.agentId == id)
  },
  GetClientReceipts:(state)=> (id) =>{
    return state.receipts
      .filter(i=>i.agentId == id)
  },
}