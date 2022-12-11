<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">

      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />
        <h2 class="brand-text text-primary ml-1">
          System
        </h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col
        lg="8"
        class="d-none d-lg-flex align-items-center p-5"
      >
        <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
          <b-img
            fluid
            :src="imgUrl"
            alt="Login V2"
          />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col
        lg="4"
        class="d-flex align-items-center auth-bg px-2 p-lg-5"
      >
        <b-col
          sm="8"
          md="6"
          lg="12"
          class="px-xl-2 mx-auto"
        >
          <b-card-title
            title-tag="h2"
            class="font-weight-bold mb-1"
           
          >
           تسجيل الدخول 👋
          </b-card-title>
          <b-card-text class="mb-2">
           من فضلك ادخل اسم المستخدم وكلمة المرور
          </b-card-text>

          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form
              class="auth-login-form mt-2"
              @submit.prevent
            >
              <!-- email -->
              <b-form-group
                label="اسم المستخدم"
                label-for="login-text"
              >
                <validation-provider
                  #default="{ errors }"
                  name="اسم المستخدم"
                  rules="required"
                >
                  <b-form-input
                    id="login-text"
                    v-model="userName"
                    :state="errors.length > 0 ? false:null"
                    name="login-text"
                    placeholder="اسم المستخدم"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group 
              label="كلمة المرور"
                label-for="login-password"
                >
              
                <validation-provider
                  #default="{ errors }"
                  name="كلمة المرور"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid':null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false:null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="············"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

            

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                @click="login"
              >
                تسجيل دخول
              </b-button>
            </b-form>
          </validation-observer>
        </b-col>
      </b-col>
    
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver,localize } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardText, BCardTitle, BImg, BForm, BButton,
} from 'bootstrap-vue'
// import { required, email } from '@validations'
import {
  required,
  email,
  confirmed,
  url,
  between,
  alpha,
  integer,
  password,
  min,
  digits,
  alphaDash,
  length,
} from "@validations";
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import axios from '@axios'
export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      locale: 'ar',
      status: '',
      password: '',
      userName: '',
      sideImg: require('@/assets/images/pages/login-v2.svg'),
      // validation rulesimport store from '@/store/index'
      required,
      error:null,
      SearchResults:null,
    
       dir: false,
    }
  },
  // beforeCreate() {
  //     const { isRTL } = false;
  //   document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
  // },
mounted(){
    localize(this.locale);
    },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
      statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        Current: "light-primary",
        Professional: "light-success",
        Rejected: "light-danger",
        Resigned: "light-warning",
        Applied: "light-info",
        /* eslint-enable key-spacing */
      };

      return (status) => statusColor[status];
    },
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true;
        return this.dir;
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false;
      return this.dir;
    },
  },
  methods: {
    async login(){
     const actionPayload = {
      userName : this.userName,
      password:this.password
     }
     try {
       const response =  await this.$store.dispatch('Auth', actionPayload)
        if(response.status = 200){
        this.$toast({
            component: ToastificationContent,
            props: {
              title:  "تم تسجيل الدخول بنجاح",
              icon: 'EditIcon',
              variant: 'success',
            },
          })
          this.$router.push({name:'home'})
     }
      } 
      catch (err) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title:  err,
              icon: 'TrashIcon',
              variant: 'danger',
            },
          })
      }
    
},

    validationForm() {
      this.$refs.loginValidation.validate().then(success => {
        if (success) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Form Submitted',
              icon: 'EditIcon',
              variant: 'success',
            },
          })

          //localStorage.setItem('userData', JSON.stringify(userData))

          this.$router.push({name:'home'})
         
        }
        else{
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Access denied',
              icon: 'TrashIcon',
              variant: 'danger',
            },
          })
        }
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
