
    
<template>
<div>
    <b-row>
        <b-col cols="12">
   
  <b-list-group>
    <b-list-group-item v-for="(item,index) in items" :key="item.id.toString()">
        {{item.arabicName}}
        <b-form-checkbox
           :id="index"
           v-model="selected"
           :value="item"
           style="float: left"
           
          />
        </b-list-group-item>
   
  </b-list-group>
  </b-col>
   </b-row>
<b-row >
    <b-col cols="8" >
        <div style="margin-top:5vh">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"

                type="submit"
                variant="primary"
                class="mr-1"
                @click.prevent="UpdateItems()"
              >
                إضافه
              </b-button>
            
              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="back"
                variant="primary"
                style="margin-right:15px;"
                @click="this.back"
              >
                رجوع
              </b-button>
              </div>
            </b-col>
            </b-row>
            </div>
</template>

<script>
import { BListGroup, BListGroupItem,BFormCheckbox,BButton,BRow,BCol } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
export default {
  components: {
    BListGroup,
    BListGroupItem,
    BFormCheckbox,
    BButton,
    BRow,BCol
  },
  directives: {
    Ripple,
  },

  props:['id'],
  mounted(){
    this.items = this.$store.getters.GetReportItems
  },
  data(){
    return{
        items:[],
        selected:[]
    }
    },
    methods:{
        UpdateItems(){
            
        },
        back(){

        }
    },

  }

</script>