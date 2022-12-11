<template>
  <KeepAlive>
    <b-card-code>
      <validation-observer ref="simpleRules">
        <b-form
          style=""
          @submit.prevent
        >

          <b-row>

            <!--  comment -->
            <b-col cols="12">
              <b-form-group
                label="الكومنت"
                label-for="v-comment"
              >
                

                  <b-form-input
                    id="v-comment"
                    v-model="comment"
                    placeholder="الكومنت"
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
                @click="AddComment"
              >
                تعديل
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
     comment:null

    }
  },
  mounted() {
    console.log(this.id)

    // switch to arabic in validation
    localize(this.locale)
  },
  methods: {

    validationForm() {
      
        this.$refs.simpleRules.validate().then(success => {
          if (success) {
            // eslint-disable-next-line
            this.AddCoupon();
          }
        })
    },

    AddComment() {
        const payload = {
            companyId:this.id,
            comment:this.comment
        }
        this.$store.commit('EditCompanyComment',payload)
        this.$router.push({name:'company-report'})
    },
    back() {
      this.$router.push({
        name:'company-report',
      })
    },
  },
}
</script>
