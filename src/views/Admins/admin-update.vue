<template>
  <KeepAlive>
    <b-card-code>
      <validation-observer ref="simpleRules">
        <b-form
          v-if="!editAdmin"
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
                    v-model="name"
                    :state="errors.length > 0 ? false:null"
                    placeholder="اسم المشرف "
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
                    placeholder="اسم المشرف "
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
                    v-model="admin.name"
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
                    v-model="admin.username"
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
              v-model="admin.password"
              type="password"
              :state="errors.length > 0 ? false : null"
              placeholder="كلمة السر"
            />
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
      editAdmin: false,

    }
  },
  mounted() {

    // switch to arabic in validation
    localize(this.locale)
    console.log(this.$route.params)
    if (this.$route.params) {
      this.editAdmin = true
      this.admin = this.$store.getters.GetAdmins.find(i=>i.id == this.$route.params.id)
    }
  },
  methods: {

    validationForm() {
      if (!this.editAdmin) {
        this.$refs.simpleRules.validate().then(success => {
          if (success) {
            // eslint-disable-next-line
            this.AddAdmin();
          }
        })
      } else {
        this.$refs.simpleRules.validate().then(success => {
          if (success) {
            // eslint-disable-next-line
               this.EditAdmin();
          }
        })
      }
    },

    AddAdmin() {
      const admin = {
        id: new Date().toString(),
        name: this.name,
        username: this.username,
        password:this.password

      }
      store.commit('AddAdmin', admin)
      this.$router.push({
        name: 'admins',
      })
    },
    EditAdmin() {
      if (this.editAdmin) {
        const admin = {
          id:this.admin.id,
          name: this.admin.name,
          username:this.admin.username,
          password: this.admin.password,

        }

        store.commit('EditAdmin', admin)
        router.push('/admins')
      }
    },
    reset() {
      if (this.editAdmin) {
        this.admin.name = null
        this.admin.username = null
        this.admin.password = null
      } else {
        this.name = null
        this.username = null
        this.password = null
      }
    },

    back() {
      router.push('/admins')
    },
  },
}
</script>
