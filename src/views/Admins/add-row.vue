  
<template>
    <b-form @submit.prevent>
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
    mounted(){
        this.items = this.$store.getters.GetReportItems;
       for(var i=0; i<this.items.length;i++){
            
            this.data[this.items[i].name] = ''
       }
    },
    data(){
        return{
            items:[],
            data:{
            }
        }

    },
    methods:{
        AddRow(){
            this.data['id'] = new Date()
            this.$store.commit('AddRow',this.data)
            this.$router.push('full-report')
        },
        back(){
            this.$router.push('full-report')
        }
    }
  }
  </script>