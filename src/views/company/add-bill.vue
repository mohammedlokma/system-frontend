<template>
  <KeepAlive>
    <b-card-code>
      <validation-observer ref="simpleRules">
        <b-form
          style=""
          @submit.prevent
        >

          <b-row>

            <!--  price -->
            <b-col cols="6">
              <b-form-group
                label="الإجمالي"
                label-for="v-price"
              >
                <validation-provider
                  #default="{ errors }"
                  name="الإجمالي"
                  rules="required"
                >

                  <b-form-input
                    id="v-price"
                    v-model.number="total"
                    type="number"
                    :state="errors.length > 0 ? false:null"
                    placeholder=" الإجمالي بالجنيه"
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
                        placeholder="تاريخ الفاتورة"
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

            <b-col cols="8" >
              <b-form-group
                label="العنوان"
                label-for="v-title"
                style="max-width: 554px;"
              >
               
                  <b-form-input
                    id="v-title"
                    v-model="title"
                    placeholder="العنوان"
                  />
                
              </b-form-group>
            </b-col>
     <div style="margin-bottom:3vh">
     <div>
      <b-form
        ref="form"
        :style="{height: trHeight}"
        class="repeater-form"
        @submit.prevent="repeateAgain"
      >

        <!-- Row Loop -->
        <b-row
          v-for="(item, index) in items"
          :id="item.id"
          :key="item.id"
          ref="row"
        >

          <!-- Item Name -->
          <b-col md="6">
            <b-form-group
              label="التفاصيل"
              label-for="التفاصيل"
               
            >
              <b-form-input
                id="item-name"
                type="text"
                v-model="item.details"
                placeholder="التفاصيل"
              />
            </b-form-group>
          </b-col>

          <!-- Cost -->
          <b-col md="3">
            <b-form-group
              label="السعر"
              label-for="السعر"
            >
              <b-form-input
                id="cost"
                type="number"
                 v-model="item.price"
                placeholder="السعر"
              />
            </b-form-group>
          </b-col>

          <!-- Remove Button -->
          <b-col
            lg="3"
            md="6"
            class="mb-50"
          >
            <b-button
              v-ripple.400="'rgba(234, 84, 85, 0.15)'"
              variant="outline-danger"
              class="mt-0 mt-md-2"
              @click="removeItem(index)"
            >
              <feather-icon
                icon="XIcon"
                class="mr-25"
              />
              <span>حذف</span>
            </b-button>
          </b-col>
          <b-col cols="12">
            <hr>
          </b-col>
        </b-row>

      </b-form>
    </div>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="repeateAgain"
    >
      <feather-icon
        icon="PlusIcon"
        class="mr-25"
      />
      <span>إضافة عنصر جديد</span>
    </b-button>
  </div>
        <!-- <bill-repeater style="margin-bottom:5vh" /> -->
                
            <!-- submit and reset -->
            <b-col cols="12" >
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
import { heightTransition } from '@core/mixins/ui/transition'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import { required } from '@validations'
import BillDetailsRepeater from './bill-details-repeater.vue'

export default {
  components: {
    'bill-repeater' :BillDetailsRepeater,
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
  mixins: [heightTransition],
  props:['id'],
  data() {
    return {

      // ? Default locale for VeeValidate is 'en'
      locale: 'ar',
      // for validation
      required,
      total:null,
      date:null,
      items: [{
        id: 1,
        details: '',
        price:''

      }],
      nextTodoId: 1,
      price:null,
      details:null,
      title:null,
      data:[],
      

    }
  },
  mounted() {
    // switch to arabic in validation
    localize(this.locale)
     this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {

    validationForm() {
      
        this.$refs.simpleRules.validate().then(success => {
          if (success) {
            // eslint-disable-next-line
            this.AddBill();
          }
        })
    },

    AddBill() {
        console.log(this.items)
    const bill = {
        id:new Date(),
        companyId:this.id,
        title:this.title,
        date:this.date,
        total:this.total
    }
 const billDetails = this.items;
       store.commit('AddBill',bill)
       store.commit('AddBillDetails',billDetails)


       this.$router.push({
        name:'company-details',
        params:{id:this.id}
      })
    },
    back() {
      this.$router.push({
        name:'company-details',
        params:{id:this.id}
      })
    },
     repeateAgain() {
      this.items.push({
        id: this.nextTodoId += this.nextTodoId,
        price:'',
        details:'',
      })

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
      })
      console.log(this.items)

    },
    removeItem(index) {
      this.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form.scrollHeight)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.repeater-form {
  overflow: hidden;
  transition: .35s height;
}
</style>