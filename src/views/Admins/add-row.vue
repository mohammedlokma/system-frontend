  
<template>
      <validation-observer ref="simpleRules">
    <b-form 
      v-if="!editRow"
     @submit.prevent>
      <b-row>
        <b-col v-for="item in items" :key="item.id" cols="12">
          <b-form-group
          v-if="item.arabicName !== 'اسم المندوب'"
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
           <b-form-group
           v-else-if="item.arabicName === 'اسم المندوب'"
            label="اسم المندوب"
            :label-for="'v-agentName'"
          >
           <validation-provider
                  #default="{ errors }"
                  name="اسم المندوب"
                  rules="required"
                >
              <b-dropdown
           style="width:100%"
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      :text=" agentName==null? 'اسم المندوب': agentName"
      v-model="data[item.name]"
      :state="errors.length > 0 ? false:null"
      variant="outline-primary"
    >
      <b-dropdown-item 
      v-for="agent in agents" 
      :key="agent.id"
      :value="agent.name" @click="agentName=agent.name ,data[item.name] = agentName">
      {{agent.name}}
      </b-dropdown-item>
    </b-dropdown>
     <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
          </b-form-group>
        </b-col>

        <!-- submit and reset -->
        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
            @click="validationForm"
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
          v-if="item.arabicName !== 'اسم المندوب'"
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
           <b-form-group
          
           v-else-if="item.arabicName === 'اسم المندوب'"
            label="اسم المندوب"
            :label-for="'v-agentName'"
          >
           
              <b-dropdown
               style="width: 100%"
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      :text="agentName"
      v-model="row[item.name]"
      variant="outline-primary"
    >
      <b-dropdown-item 
      v-for="agent in agents" 
      :key="agent.id"
      :value="agent.name" @click="row[item.name]= agent.name,agentName=row[item.name]">
      {{agent.name}}
      </b-dropdown-item>
    </b-dropdown>
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
            @click="validationForm"
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
      </validation-observer>
  </template>
  
  <script>
  import {
    BRow, BCol, BFormGroup, BFormInput, BFormCheckbox,BDropdown, BDropdownItem, BForm, BButton,
  } from 'bootstrap-vue'
  import Ripple from 'vue-ripple-directive'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
  import { required } from '@validations'
  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
      BRow,
      BCol,
      BFormGroup,
      BFormInput,
      BDropdown,
       BDropdownItem,
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
      }
      this.agents = this.$store.getters.GetAgents 
        this.items = this.$store.getters.GetReportItems;
       
       for(var i=0; i < (this.items).length;i++){
            
            this.data[this.items[i].name] = ''
       }
    },
    data() {
        return{
            // for validation
            required,
            items:[],
            data:{},
            editRow:false,
            row:null,
            agents:[],
            agentName:null
        }

    },
    methods:{
      validationForm() {
         this.$refs.simpleRules.validate().then(success => {
          if (success && !this.editRow) {
            // eslint-disable-next-line
            this.AddRow();
          }
          else if(success && this.editRow){
            this.EditRow()
          }
        })
      },
        AddRow(){
            this.data['id'] = new Date().toISOString().split('T')[0]
            this.data['releaseStatus'] = false
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