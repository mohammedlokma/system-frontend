  export default{
  //admins
  GetAdmins(state){
    return state.admins;
  },
  GetReportItems(state){
    return state.reportItems;
  },
  GetReportData(state){
    return state.fullReportData;
  },
  GetRowReportData:(state)=>(id)=>{
    console.log(state.fullReportData.find(i=>i.id == id))
    return state.fullReportData.find(i=>i.id == id)
  },
  
}