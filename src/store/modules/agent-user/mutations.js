export default{
    //agent-user
  AddExpense(state,payload){
    state.expenses.push(payload)
  },
  AddCoupon(state,payload){
    state.coupons.push(payload)
  },
  EditCoupon(state,payload){
    let coupon = state.coupons.find(i=>i.id == payload.id)
    coupon.price = payload.price
    coupon.companyName = payload.companyName
    coupon.billNumber = payload.billNumber
    coupon.policyNumber = payload.policyNumber
    coupon.certificateNumber = payload.certificateNumber
    coupon.couponNumber = payload.couponNumber
    coupon.date = payload.date
    coupon.details = payload.details
  },
  EditExpense(state,payload){
    let expense = state.expenses.find(i=>i.id === payload.id)
    expense.price = payload.price
    expense.date = payload.date
    expense.details = payload.details
  },
}