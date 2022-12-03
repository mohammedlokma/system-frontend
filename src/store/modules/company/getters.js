export default{
    //comapnies
    GetCompanies(state){
      return state.companies;
    },
    GetCompany:(state)=> (id) =>{
      return state.companies.
      filter(i=>i.id == id)
    },
    GetCompanyPayments:(state)=>(id)=>{
      return state.payments.
      filter(i=>i.companyId ==id)
    },
    GetCompanyBills:(state)=>(id)=>{
      return state.bills.
      filter(i=>i.companyId ==id)
    },
    GetCompanyReportItems:(state)=>(id)=>{
      return state.companyReportItems
      .filter(i=>i.companyId == id)
    }

    
  }