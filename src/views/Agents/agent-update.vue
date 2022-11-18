<template>
  <KeepAlive>
    <b-card-code>
      <validation-observer ref="simpleRules">
        <b-form
          v-if="!editAgent"
          style=""
          @submit.prevent
        >

          <b-row>

            <!--  name -->
            <b-col cols="12">
              <b-form-group
                label="اسم المندوب"
                label-for="v-first-name"
              >
                <validation-provider
                  #default="{ errors }"
                  name="اسم المندوب"
                  rules="required"
                >

                  <b-form-input
                    id="v-first-name"
                    v-model="name"
                    :state="errors.length > 0 ? false:null"
                    placeholder="اسم المندوب "
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <!--  username -->
             <b-col cols="12">
              <b-form-group
                label="اسم المستخدم"
                label-for="v-username"
              >
                <validation-provider
                  #default="{ errors }"
                  name="اسم المستخدم"
                  rules="required"
                >

                  <b-form-input
                    id="v-first-name"
                    v-model="username"
                    :state="errors.length > 0 ? false:null"
                    placeholder="اسم المستخدم "
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
                
                 <!--  password -->
              <b-col cols="12">
        <b-form-group
                label=" كلمة المرور"
                label-for="v-password"
              >
          <validation-provider
            #default="{ errors }"
            rules="required|password"
            name="password"
            vid="password"
          >
            <b-form-input
              v-model="password"
              type="password"
              :state="errors.length > 0 ? false : null"
              placeholder="كلمة السر"
            />
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>
      <b-col cols="12">
              <b-form-group
                label="أماكن الخدمه"
                label-for="v-servicePlaces"
              >
             
                <multiselect
                v-model="places"
                :options="servicePlaces"
                :multiple="true"
                :close-on-select="false"
                trackBy="name"
                label="name"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="اختار المحافظات"
                :preselect-first="false"
              >
              </multiselect>
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
                type="reset"
                variant="primary"
                @click="this.reset"
              >
                إعادة تهيئة
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

        <b-form
          v-else
          style=""
          @submit.prevent
        >

          <b-row>

            <!--  name -->
            <b-col cols="12">
              <b-form-group
                label="اسم المشرف"
                label-for="v-first-name"
              >
                <validation-provider
                  #default="{ errors }"
                  name="اسم المشرف"
                  rules="required"
                >
                  <b-form-input

                    id="v-first-name"
                    v-model="agent.name"
                    :state="errors.length > 0 ? false:null"
                    placeholder="اسم المشرف"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            
            <!--  username -->
           <b-col cols="12">
              <b-form-group
                label="اسم المستخدم"
                label-for="v-name"
              >
                <validation-provider
                  #default="{ errors }"
                  name="اسم المستخدم"
                  rules="required"
                >
                  <b-form-input

                    id="v-username"
                    v-model="agent.username"
                    :state="errors.length > 0 ? false:null"
                    placeholder="اسم المشرف"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
                <!-- password -->
                <b-col cols="12">
        <b-form-group
                label=" كلمة المرور"
                label-for="v-password"
              >
          <validation-provider
            #default="{ errors }"
            rules="required|password"
            name="password"
            vid="password"
          >
            <b-form-input
              v-model="agent.password"
              type="password"
              :state="errors.length > 0 ? false : null"
              placeholder="كلمة السر"
            />
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>
       <b-col cols="12">
              <b-form-group
                label="أماكن الخدمه"
                label-for="v-servicePlaces"
              >
             
                <multiselect
                v-model="agent.servicePlaces"
                :options="servicePlaces"
                :multiple="true"
                :close-on-select="false"
                trackBy="name"
                label="name"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="اختار المحافظات"
                :preselect-first="false"
              >
              </multiselect>
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
                تعديل
              </b-button>
              <b-button
                v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                type="reset"
                variant="primary"
                @click="this.reset"
              >
                إعادة تهيئة
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
  BFormCheckboxGroup, BFormRadio, BDropdown, BDropdownItem, BDropdownDivider, BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import store from '@/store/index'
import router from '@/router'
import Multiselect from "vue-multiselect";
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
    Multiselect,
  },

  directives: {
    Ripple,
  },
  props: ['id'],
  data() {
    return {

      // ? Default locale for VeeValidate is 'en'
      locale: 'ar',
      // for validation
      required,
      name: null,
      username: null,
      password:null,
      places:[],
      servicePlaces:[],
      editAgent: false,

    }
  },
  mounted() {

    // switch to arabic in validation
    localize(this.locale)
  this.servicePlaces = this.$store.getters.GetServicePlaces; 
    if (this.id) {
      this.editAgent = true
      this.agent = this.$store.getters.GetAgents.find(i=>i.id == this.$route.params.id)
    }
  },
  methods: {

    validationForm() {
      if (!this.editAgent) {
        this.$refs.simpleRules.validate().then(success => {
          if (success) {
            // eslint-disable-next-line
            this.AddAgent();
          }
        })
      } else {
        this.$refs.simpleRules.validate().then(success => {
          if (success) {
            // eslint-disable-next-line
               this.EditAgent();
          }
        })
      }
    },

    AddAgent() {
      const agent = {
        id: new Date().toString(),
        name: this.name,
        username: this.username,
        password:this.password,
        servicePlaces: this.places


      }
      store.commit('AddAgent', agent)
      this.$router.push({
        name: 'agents',
      })
    },
    EditAgent() {
      if (this.editAgent) {
        const agent = {
          id:this.agent.id,
          name: this.agent.name,
          username:this.agent.username,
          password: this.agent.password,
          servicePlaces: this.agent.servicePlaces

        }

        store.commit('EditAgent', agent)
        router.push('/agents')
      }
    },
    reset() {
      if (this.editAgent) {
        this.agent.name = null
        this.agent.username = null
        this.agent.password = null
        this.agent.servicePlaces = null
      } else {
        this.name = null
        this.username = null
        this.password = null
        this.places = [] 
      }
    },

    back() {
      router.push('/agents')
    },
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

