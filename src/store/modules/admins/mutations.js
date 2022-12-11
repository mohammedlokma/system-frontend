export default{
     //admins
     AddAdmin(state,payload){
        state.admins.push(payload);
      },
      
      EditAdmin(state,payload){
         let admin = state.admins.find(i=>i.id == payload.id);
         admin.name = payload.name;
         admin.username = payload.username;
         admin.password = payload.password;
      },
  
      DeleteAdmin(state,id){
        state.admins = state.admins.filter(i => i.id !==  id);
      },
  
      DeleteAdmins(state){
        state.admins.splice(0,state.admins.length);
      },
      AddReportItem(state,payload){
        state.reportItems.push(payload)
      },
      
      DeleteReportItem(state,id){
        state.reportItems = state.reportItems.filter(i => i.id !==  id);

      },
      AddColumn(state,payload){
        state.reportItems.push(payload)
        state.fullReportData[0][payload.name] = ''
      },
      AddRow(state,payload){
          state.fullReportData.push(payload)
          console.log(state.fullReportData)
      },
      EditCompanyComment(state,payload){
        console.log(payload)
        let row = state.fullReportData.find(i=>i.id == payload.companyId)
        console.log(row)
        row.companyComment = payload.comment
      },
}