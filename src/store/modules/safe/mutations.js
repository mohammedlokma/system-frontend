export default{
     //safe
     AddIncome(state,payload){
          state.total += payload.price
          state.income.push(payload)
          console.log(state.total)
     },
     AddOut(state,payload){
          state.total -= payload.price
          state.output.push(payload)
          console.log(state.total)
     },
     DeleteIncome(state,payload){},
     DeleteAllIncome(state){},
     DeleteOut(state,payload){},
     DeleteAllOut(state){},
    
}