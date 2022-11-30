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
      style="margin-top: -80px; margin-right:-6vh"
      class="btn btn-primary"
      @click="AddIncome()"
    >
      إضافة مبلغ للخزنة
    </button>
        <button
      style="margin-top: -80px; margin-right:5vh "
      class="btn btn-primary"
      @click="AddOut()"
    >
       سحب مبلغ من الخزنة
    </button>
     <button
      style="margin-top: -10px; margin-right:7vh; "
      class="btn btn-primary"
      @click="toggle(out=true)"
    >
       المدخلات
    </button>
     <button
      style="margin-top: -10px; margin-right:5vh; "
      class="btn btn-primary"
      @click="toggle(out=false)"
    >
       المخرجات
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
                icon="TrendingUpIcon"
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
<div style="margin-top: -7vh;
    margin-right: 30vh;">
      <!-- statics -->
      <statistic-card-vertical
        style="
          min-width: 150px;
          font-size: 20px;
          border-radius: 40%;
        "
        icon="DollarSignIcon"
        color="info"
        :statistic="total"
        statistic-title="إجمالي الأموال"
      />
    </div>
     
    </b-row>
  </b-card>
</template>

<script>
import {
  BCard, BButton, BAvatar, BRow, BCol,
} from 'bootstrap-vue'
import StatisticCardVertical from '@core/components/statistics-cards/StatisticCardVertical.vue'

export default {
  components: {
    BCard, BButton, BRow, BCol, BAvatar,StatisticCardVertical
  },
mounted(){
  this.total = this.$store.getters.GetSafeTotal
},
data(){
  return{
    out:false,
    total:0,
  }
},
methods:{
  AddIncome(){
    this.$router.push({
      name:"add-income",
    })
  },
  AddOut(){
    this.$router.push({
      name:"add-out",
    })
  },
  toggle(out){
    this.$emit('toggle',out)
  }
}

}
</script>

<style>

</style>
