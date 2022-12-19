<template>
  <KeepAlive>
    <b-card-code>
      <validation-observer ref="simpleRules">
        <b-form
        v-if="!editCoupon"
          style=""
          @submit.prevent
        >

          <b-row>

            <!--  price -->
            <b-col cols="6">
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
            <!-- company -->
             <b-col cols="6">
              <b-form-group
                label="الشركة"
                label-for="v-company"
              >
              <validation-provider
                  #default="{ errors }"
                  name="الشركة"
                  rules="required"
                >
                  <b-dropdown
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      :text="companyName ==null ? 'الشركة': companyName"
      v-model='companyName'
      :state="errors.length > 0 ? false:null"
      variant="outline-primary"
    >
      <b-dropdown-item 
      v-for="company in companies" 
      :key="company.id"
      :value="company.name" @click="companyName=company.name">
      {{company.name}}
      </b-dropdown-item>
    </b-dropdown>
         <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <!-- coupon number -->
                 <b-col cols="6">
              <b-form-group
                label="رقم القسيمة"
                label-for="v-coupon"
              >
                <validation-provider
                  #default="{ errors }"
                  name="رقم القسيمة"
                  rules="required"
                >

                  <b-form-input
                    id="v-coupon"
                    v-model="couponNumber"
                    :state="errors.length > 0 ? false:null"
                    placeholder="رقم القسيمة"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
  <b-col cols="6">
              <b-form-group
                label="رقم الفاتورة"
                label-for="v-coupon"
              >
                  <b-form-input
                    id="v-bill"
                    v-model="billNumber"
                    placeholder="رقم الفاتورة"
                  />
                 
              </b-form-group>
            </b-col>
            <b-col cols="6">
              <b-form-group
                label="رقم البوليصه"
                label-for="v-policy"
              >

                  <b-form-input
                    id="v-ploicy"
                    v-model="policyNumber"
                    placeholder="رقم البوليصه"
                  />
                
              </b-form-group>
            </b-col>
              <b-col cols="6">
              <b-form-group
                label="رقم الشهاده"
                label-for="v-certificate"
              >

                  <b-form-input
                    id="v-certificate"
                    v-model="certificateNumber"
                    placeholder="رقم الشهاده"
                  />
                 
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
                        placeholder="تاريخ القسيمة"
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
                  
                  <b-dropdown
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      :text="detail ==null ? 'نوع البيان': detail"
      v-model='detail'
      variant="outline-primary"
    >
      <b-dropdown-item 
      v-for="company in companies" 
      :key="company.id"
      :value="company.name" @click="detail=company.name">
      {{company.name}}
      </b-dropdown-item>
    </b-dropdown>
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
 <b-form
        v-else
          style=""
          @submit.prevent
        >

          <b-row>

            <!--  price -->
            <b-col cols="6">
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
                    v-model.number="coupon.price"
                    type="number"
                    :state="errors.length > 0 ? false:null"
                    placeholder=" المبلغ بالجنيه"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <!-- company -->
             <b-col cols="6">
              <b-form-group
                label="الشركة"
                label-for="v-company"
              >
              <validation-provider
                  #default="{ errors }"
                  name="الشركة"
                  rules="required"
                >
                  <b-dropdown
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      :text="coupon.companyName"
      v-model='coupon.companyName'
      :state="errors.length > 0 ? false:null"
      variant="outline-primary"
    >
      <b-dropdown-item 
      v-for="company in companies" 
      :key="company.id"
      :value="company.name" @click="coupon.companyName=company.name">
      {{company.name}}
      </b-dropdown-item>
    </b-dropdown>
         <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <!-- coupon number -->
                 <b-col cols="6">
              <b-form-group
                label="رقم القسيمة"
                label-for="v-coupon"
              >
                <validation-provider
                  #default="{ errors }"
                  name="رقم القسيمة"
                  rules="required"
                >

                  <b-form-input
                    id="v-coupon"
                    v-model="coupon.couponNumber"
                    placeholder="رقم القسيمة"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <!-- policy number -->
                 <b-col cols="6">
              <b-form-group
                label="رقم البوليصه"
                label-for="v-policy"
              >
                  <b-form-input
                    id="v-policy"
                    v-model="coupon.policyNumber"
                    placeholder="رقم البوليصه"
                  />
              </b-form-group>
            </b-col>
            <!-- bill number -->
                 <b-col cols="6">
              <b-form-group
                label="رقم الفاتورة"
                label-for="v-bill"
              >
                  <b-form-input
                    id="v-coupon"
                    v-model="coupon.billNumber"
                    placeholder="رقم الفاتورة"
                  />
              </b-form-group>
            </b-col>
            <!-- certificate number -->
                 <b-col cols="6">
              <b-form-group
                label="رقم الشهاده"
                label-for="v-certificate"
              >
                  <b-form-input
                    id="v-certificate"
                    v-model="coupon.certificateNumber"
                    placeholder="رقم القسيمة"
                  />
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
                        v-model="coupon.date"
                        id="datepicker-buttons"
                        placeholder="تاريخ القسيمة"
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
                  <b-dropdown
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      :text="coupon.companyName"
      v-model='coupon.companyName'
      variant="outline-primary"
    >
      <b-dropdown-item 
      v-for="company in companies" 
      :key="company.id"
      :value="company.name" @click="coupon.companyName=company.name">
      {{company.name}}
      </b-dropdown-item>
    </b-dropdown>
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
  props:['coupon'],
  data() {
    return {
      companies:[],
      // ? Default locale for VeeValidate is 'en'
      locale: 'ar',
      // for validation
      required,
      price:null,
      couponNumber:null,
      billNumber:null,
      certificateNumber:null,
      policyNumber:null,
      date:null,
      details:null,
      companyName:null,
      detail:null,
      editCoupon:false,

    }
  },
  mounted() {
    if(this.coupon){
      this.editCoupon = true
    }
    // switch to arabic in validation
    localize(this.locale)
    this.companies = this.$store.getters.GetCompanies
  },
  methods: {
     validationForm() {
      
        this.$refs.simpleRules.validate().then(success => {
          if (success && !this.editCoupon) {
            // eslint-disable-next-line
            this.AddCoupon();
          }
          else if(success && this.editCoupon){
            this.EditCoupon()
          }
        })
    },
    AddCoupon() {
      const payload= {
        id:new Date(),
        clientId:1,
        companyName:this.companyName,
        price:this.price,
        billNumber:this.couponNumber,
        date:this.date,
        details:this.details
      }
      this.$store.commit('AddCoupon',payload)
      this.$router.push({name:'coupons'})
    },
    EditCoupon(){
      const payload = {
         id:this.coupon.id,
        companyName:this.coupon.companyName,
        price:this.coupon.price,
        billNumber:this.coupon.billNumber,
        policyNumber:this.coupon.policyNumber,
        couponNumber:this.coupon.couponNumber,
        certificateNumber:this.coupon.certificateNumber,
        date:this.coupon.date,
        details:this.coupon.details
      }
      this.$store.commit('EditCoupon',payload)
      this.$router.push({name:'coupons'})

    },
    back() {
      this.$router.push({
        name:'coupons',
      })
    },
  },
}
</script>
