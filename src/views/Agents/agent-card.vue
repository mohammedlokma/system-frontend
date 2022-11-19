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
      style="margin-top: -10px; "
      class="btn btn-primary"
    >
      إضافة عهده
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
              <small>إجمالي المدفوعات الشهرية</small>
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
              <small>إجمالي العهدة الشهرية</small>
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
            <th class="pb-50">
              <feather-icon
                icon="UserIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">الاسم</span>
            </th>
            <td class="pb-50">
              {{this.agent.name}}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="CheckIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">اسم المستخدم</span>
            </th>
            <td class="pb-50 text-capitalize">
              {{this.agent.username}}
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="StarIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">أماكن الخدمه</span>
            </th>
            <td class="pb-50 text-capitalize">
              <span 
              class="btn btn-success"
              v-for="place in agent.servicePlaces"
              :key="place.id"
              :style=" 'margin-right:1vh'"
              >{{place.name}}</span>
            </td>
          </tr>
          <tr>
            <th class="pb-50">
              <feather-icon
                icon="FlagIcon"
                class="mr-75"
              />
              <span class="font-weight-bold">العهده</span>
            </th>
            <td class="pb-50">
              2222
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
  this.agent = this.$store.getters.GetAgents.find(i=>i.id == this.id)
  console.log(this.agent)
},
data(){
  return{
    agent:{}
  }
}

}
</script>

<style>

</style>
