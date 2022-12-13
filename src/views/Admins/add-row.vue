  
<template>
    <b-form 
      v-if="!editRow"
     @submit.prevent>
      <b-row>
        <b-col v-for="item in items" :key="item.id" cols="12">
          <b-form-group
            :label="item.arabicName"
            :label-for="'v-'+ item.name"
          >
            <b-form-input
              :id="'v-'+ item.name"
              :type="item.type"
              v-model="data[item.name]"
              :placeholder="item.arabicName"
            />
          </b-form-group>
        </b-col>

        <!-- submit and reset -->
        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
            @click="AddRow"
          >
            إضافة
          </b-button>
           <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="back"
                variant="primary"
                @click="this.back"
              >
                رجوع
              </b-button>
        </b-col>
      </b-row>
    </b-form>
    <b-form 
      v-else
     @submit.prevent>
      <b-row>
        <b-col v-for="item in items" :key="item.id" cols="12">
          <b-form-group
            :label="item.arabicName"
            :label-for="'v-'+ item.name"
          >
            <b-form-input
              :id="'v-'+ item.name"
              :type="item.type"
              v-model="row[item.name]"
              :placeholder="item.arabicName"
            />
          </b-form-group>
        </b-col>
         <b-col cols="12">
          <b-form-group
            label="كومنت العميل"
            label-for="v-agentComment"
          >
            <b-form-input
              id="v-agentComment"
              type="text"
              v-model="row['agentComment']"
              placeholder="كومنت العميل"
            />
          </b-form-group>
        </b-col>

        <!-- submit and reset -->
        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
            @click="EditRow"
          >
            تعديل
          </b-button>
           <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="back"
                variant="primary"
                @click="this.back"
              >
                رجوع
              </b-button>
        </b-col>
      </b-row>
    </b-form>
  </template>
  
  <script>
  import {
    BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
  } from 'bootstrap-vue'
  import Ripple from 'vue-ripple-directive'
  
  export default {
    components: {
      BRow,
      BCol,
      BFormGroup,
      BFormInput,
      BFormCheckbox,
      BForm,
      BButton,
    },
    directives: {
      Ripple,
    },
    props:['id'],
    mounted(){
      if(this.id){
        this.editRow = true
        this.row = this.$store.getters.GetRowReportData(this.id)
        console.log(this.row)
      }
        this.items = this.$store.getters.GetReportItems;
       
       for(var i=0; i<this.items.length;i++){
            
            this.data[this.items[i].name] = ''
       }
    },
    data(){
        return{
            items:[],
            data:{},
            editRow:false,
            row:null
        }

    },
    methods:{
        AddRow(){
            this.data['id'] = new Date()
            this.$store.commit('AddRow',this.data)
            this.$router.push('full-report')
        },
        EditRow(){
          const payload = {
            id:this.id,
            companyName:this.row.companyName,
            numberOfPackages:this.row.numberOfPackages,
            weight:this.row.weight,
            supplierName:this.row.supplierName,
            agentName:this.row.agentName,
            location:this.row.location,
            certificateNumber:this.row.certificateNumber,
            documentsDate:this.row.documentsDate,
            agentComment:this.row.agentComment,
          }
          this.$store.commit('EditRow',payload)
          this.$router.push({name:'full-report'})
        },
        back(){
            this.$router.push({name:'full-report'})
        }
    }
  }
  </script>