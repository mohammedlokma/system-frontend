<template>
  <KeepAlive>
    <b-card-code>
      <validation-observer ref="simpleRules">
        <b-form
          style=""
          @submit.prevent
        >

          <b-row>

            <!--  name -->
            <b-col cols="6">
              <b-form-group
                label="الاسم"
                label-for="v-name"
              >
                <validation-provider
                  #default="{ errors }"
                  name="الاسم"
                  rules="required"
                >

                  <b-form-input
                    id="v-name"
                    v-model="name"
                    :state="errors.length > 0 ? false:null"
                    placeholder="الاسم"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
             <b-col cols="6">
              <b-form-group
                label="النوع"
                label-for="v-type"
              >
              <validation-provider
                  #default="{ errors }"
                  name="نوع الدفع"
                  rules="required"
                >
                  <b-dropdown
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      :text="type ==null ? 'النوع': type"
      v-model='type'
      :state="errors.length > 0 ? false:null"
      variant="outline-primary"
    >
      <b-dropdown-item value="نص" @click="type='نص',typeEN='text'">نص</b-dropdown-item>
      <b-dropdown-item value="رقم" @click="type='رقم',typeEN='number'">رقم</b-dropdown-item>
      <b-dropdown-item value="تاريخ" @click="type='تاريخ',typeEN='date'">تاريخ</b-dropdown-item>
    
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

          </b-row>

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
import router from '@/router'
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
      name:null,
      type:null,
      typeEN:''

    }
  },
  mounted() {
    // switch to arabic in validation
    localize(this.locale)
  },
  methods: {

    validationForm() {
      
        this.$refs.simpleRules.validate().then(success => {
          if (success) {
            // eslint-disable-next-line
            this.AddNewItem()
          }
        })
    },
        AddNewItem(){
        const payload={
                    id:new Date(),
                    name:new Date().toLocaleDateString("en-US"),
                    arabicName:this.name,
                    type:this.typeEN
                }
                console.log(payload)
            this.$store.commit('AddColumn',payload)
            this.$router.push('full-report')
        },
   
    back() {
      this.$router.push({
        name:'full-report',
      })
    },
  },
}
</script>
