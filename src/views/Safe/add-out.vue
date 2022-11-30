<template>
  <KeepAlive>
    <b-card-code>
      <validation-observer ref="simpleRules">
        <b-form
          @submit.prevent
        >
          <b-row>
            <!--  price -->
            <b-col cols="6" >
              <b-form-group
                label="المبلغ"
                label-for="v-price"
              >
                <validation-provider
                  #default="{ errors }"
                  name="المبلغ"
                  rules="required"
                >

                  <b-form-input
                    id="v-price"
                    v-model.number="price"
                    type="number"
                    :state="errors.length > 0 ? false:null"
                    placeholder=" المبلغ بالجنيه"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

    <b-col cols="6">
              <b-form-group
                label="التاريخ"
                label-for="v-date"
              >
                <validation-provider
                  #default="{ errors }"
                  name="التاريخ"
                  rules="required"
                >
                   <b-form-datepicker
                        class="date"
                        v-model="date"
                        id="datepicker-buttons"
                        placeholder="تاريخ السحب"
                        :state="errors.length > 0 ? false:null"
                        today-button
                        reset-button
                        close-button
                        locale="en"
                        />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
   
            <b-col cols="6">
              <b-form-group
                label="التفاصيل"
                label-for="v-details"
              >
                  <b-form-input
                    id="v-details"
                    v-model="details"
                    placeholder="التفاصيل"
                  />
              </b-form-group>
            </b-col>
          </b-row>
            <b-row>
          <b-col cols="3">
              <b-form-group
                label="خرج لمندوب"
                label-for="v-agent"
              >
              
           <b-form-checkbox
            id="v-agent"
           v-model="selected"
          />
              </b-form-group>
          </b-col>
           <b-col cols="3">
              <b-form-group
              v-if="this.selected"
                label="اسم المندوب"
                label-for="v-agent"
              >
               <validation-provider
                  #default="{ errors }"
                  name="اسم المندوب"
                  rules="required"
                >
            <b-dropdown
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      :text="agentName==null?'اسم المندوب' : agentName"
      v-model='agentName'
      :state="errors.length > 0 ? false:null"
      variant="outline-primary"
    >

      <b-dropdown-item v-for="agent in agents" :key="agent.id" :value="agent.name" @click="agentName = agent.name">
        {{agent.name}}
      </b-dropdown-item>
    </b-dropdown>
           <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
          </b-col>
          </b-row>
            <!-- submit and reset -->
            <b-col cols="12">
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"

                type="submit"
                variant="primary"
                class="mr-1"
                @click.prevent="validationForm"
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
            </b-col>

        
        </b-form>

      </validation-observer>
    </b-card-code>
  </KeepAlive>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BFormDatepicker, BFormCheckboxGroup, BFormRadio, BDropdown, BDropdownItem, BDropdownDivider, BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import store from '@/store/index'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import { required } from '@validations'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    BFormCheckboxGroup,
    BFormRadio,
    BDropdown,
    BDropdownDivider,
    BDropdownItem,
    BCardCode,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
    BFormDatepicker,
  },

  directives: {
    Ripple,
  },
  props:['id'],
  data() {
    return {

      // ? Default locale for VeeValidate is 'en'
      locale: 'ar',
      // for validation
      required,
      price:null,
      date:null,
      details:'',
      selected:null,
      agentName:null,
      agents:[]
    }
  },
  mounted() {
    // switch to arabic in validation
    localize(this.locale)
    this.agents = this.$store.getters.GetAgents;
  },
  methods: {

    validationForm() {
      
        this.$refs.simpleRules.validate().then(success => {
          if (success) {
            // eslint-disable-next-line
            this.AddOut();
          }
        })
    },

    AddOut() {
    const payload = {id:new Date(),price:this.price,
    date:this.date,details:this.details}
    if(this.selected){

      let agent = this.agents.find(i=>i.name == this.agentName)
        console.log("before"+agent.cost)

        agent.cost += this.price
        console.log("after"+ agent.cost)
    }
       store.commit('AddOut',payload)
       this.$router.push({
        name:'safe',
      })
    },
    back() {
      this.$router.push({
        name:'safe',
      })
    },
  },
}
</script>
<style scoped>

.form-group{
  font-size: 1.857rem;

}

</style>
