export default{
    //agent-user
    GetExpenses(state){
      return state.expenses
    },
    GetAgentCoupons:(state)=>(id)=>{
      return state.coupons.filter(i=>i.clientId == id)
    },
    GetAgentExpenses:(state)=>(id)=>{
      return state.expenses.filter(i=>i.clientId == id)
    },
    
    
  }