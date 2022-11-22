export default{
   

    //comapnies
    AddCompany(state,payload){
      state.companies.push(payload);
    },
    
    EditCompany(state,payload){
       let company = state.companies.find(i=>i.id == payload.id);
       company.name = payload.name;
      
    },

    DeleteCompany(state,id){
      state.companies = state.companies.filter(i => i.id !==  id);
    },

    DeleteCompanies(state){
      state.companies.splice(0,state.companies.length);
    },
    AddToAccount(state,payload){
      let company = state.companies.
      find(i=>i.id == payload.companyId);
      company.account += payload.price;
      const payment = {
        id:new Date(),
        companyId: payload.companyId,
        price:payload.price,
        type:payload.type,
        date:payload.date,
        details:payload.details

      }
      state.payments.push(payment)
    },
    DeletePayment(state,id){
      state.payments = state.payments.filter(i => i.id !==  id);
    },

    DeletePayments(state){
      state.payments.splice(0,state.payments.length);
    },
    AddBill(state,payload){
      state.bills.push(payload)
      console.log(state.bills)

    },
    AddBillDetails(state,payload){
      for(var i=0 ;i< payload.length; i++){
        state.billDetails.push(payload[i])
      }
      console.log(state.billDetails)
    },
    DeleteBill(state,id){
      state.bills = state.bills.filter(i => i.id !==  id);
    },

    DeleteBills(state){
      state.bills.splice(0,state.bills.length);
    },
}