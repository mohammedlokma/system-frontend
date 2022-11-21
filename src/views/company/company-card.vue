<template>
  <b-card>

    <b-row>

      <!-- User Info: Left col -->
      <b-col
        cols="21"
        xl="6"
        class="d-flex justify-content-between flex-column"
      >
        <!-- User Avatar & Action Buttons -->
        <div class="d-flex justify-content-start">
        
          <div class="d-flex flex-column ml-1">
            <div class="mb-1">
             <button
      style="margin-top: -80px; "
      class="btn btn-primary"
      @click="AddPayment(company.id)"
    >
      إضافة دفع
    </button>
        <button
      style="margin-top: -80px; margin-right:5vh "
      class="btn btn-primary"
      @click="AddBill(company.id)"
    >
      إضافة فاتورة
    </button>
     <button
      style="margin-top: -10px; margin-right:8vh; "
      class="btn btn-primary"
      @click="toggle(payment=true)"
    >
       المدفوعات
    </button>
     <button
      style="margin-top: -10px; margin-right:5vh; "
      class="btn btn-primary"
      @click="toggle(payment=false)"
    >
       الفواتير
    </button>
            </div>
       
          </div>
        </div>

        <!-- User Stats -->
        <div class="d-flex align-items-center mt-2">
          <div class="d-flex align-items-center mr-2">
            <b-avatar
              variant="light-primary"
              rounded
            >
              <feather-icon
                icon="DollarSignIcon"
                size="18"
              />
            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                23.3k
              </h5>
              <small>إجمالي الفواتير الشهرية</small>
            </div>
          </div>

          <div class="d-flex align-items-center">
            <b-avatar
              variant="light-success"
              rounded
            >
              <feather-icon
                icon="DollarSignIcon"
                size="18"
              />


            </b-avatar>
            <div class="ml-1">
              <h5 class="mb-0">
                99.87
              </h5>
              <small>إجمالي الربح الشهري</small>
            </div>
          </div>
        </div>
      </b-col>

      <!-- Right Col: Table -->
      <b-col
        cols="12"
        xl="6"
      >
        <table class="mt-2 mt-xl-0 w-100">
          <tr>
            <th style="width:120px" class="pb-50">
              <feather-icon
                icon="UserIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">الاسم</span>
            </th>
            <td class="pb-50">
              {{this.company.name}}
            </td>
          </tr>
          <tr>
            <th style="width:120px" class="pb-50">
              <feather-icon
                icon="FlagIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">الحساب</span>
            </th>
            <td class="pb-50">
              {{this.company.account}}
            </td>
          </tr>

          
        </table>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BButton, BAvatar, BRow, BCol,
} from 'bootstrap-vue'

export default {
  components: {
    BCard, BButton, BRow, BCol, BAvatar,
  },
props:['id'],
mounted(){
  this.company = this.$store.getters.GetCompany(this.id)[0]
  console.log(this.company)
},
data(){
  return{
    company:{},
    payment:false,
  }
},
methods:{
  AddPayment(id){
    this.$router.push({
      name:"add-to-account",
      params:{id:id}
    })
  },
  AddBill(id){
    this.$router.push({
      name:"add-bill",
      params:{id:id}
    })
  },
  toggle(payment){
    this.$emit('toggle',payment)
  }
}

}
</script>

<style>

</style>
