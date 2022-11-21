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
}