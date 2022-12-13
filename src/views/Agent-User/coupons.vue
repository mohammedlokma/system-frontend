  <template>
 <b-card-code
    title=""
    style="margin-top: 50px"
  >
  
    <button
      style="margin-top: -60px; float: right"
      class="btn btn-primary"
      @click="AddCoupon"
    >
      إضافة قسيمة
    </button>
    
    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="this.coupons"
      :rtl="direction"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm,
      }"
      :pagination-options="{
        enabled: true,
        perPage: pageLength,
      }"
    >
     

      <template
        slot="table-row"
        slot-scope="props"
      >
        <!-- Column: companyId -->
        <span
          v-if="props.column.field === 'price'"
          class="text-nowrap"
        >
        
          <span class="text-nowrap">{{ props.row.price }}</span>
        </span>

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'" style="">
   

          <button 
          style="margin-right:16px" 
          class="btn btn-primary "
          @click="EditCoupon(props.row)" 
          >
                  <feather-icon
                icon="EditIcon"
                size="12"
              />
                </button>
       
        </span>

        <!-- Column: Common -->
        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <!-- pagination -->
      <template
        slot="pagination-bottom"
        slot-scope="props"
      >
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap"> عرض الصفحة الأولى </span>

            <b-form-select
              v-model="pageLength"
              :options="['3', '7', '10', '15', '20']"
              class="mx-1"
              @input="(value) => props.perPageChanged({ currentPerPage: value })"
            />
            <span class="text-nowrap"> من {{ props.total }} العناصر </span>
          </div>
          <div>
            
            <b-pagination
              :value="1"
              :total-rows="props.total"
              :per-page="pageLength"
              first-number
              last-number
              align="right"
              class="mt-1 mb-0"
              @input="(value) => props.pageChanged({ currentPage: value })"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />

              </template>
            </b-pagination>
          </div>
        </div>
      </template>
    </vue-good-table>
    <template #code>
      {{ codeBasic }}
    </template>
    </b-card-code>
      </template>
      
<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BButton,
  BAvatar,
  BBadge,
  BModal,
  VBModal,
  BPagination,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BDropdown,
  BDropdownItem,
  BFormDatepicker 
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import Ripple from 'vue-ripple-directive'
import { codeBasic } from '../code'

export default {
  components: {
    BCardCode,
    VueGoodTable,
    BButton,
    BModal,
    BAvatar,
    BBadge,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem,
    BFormDatepicker 
  },

  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  mounted() {
      this.coupons =  this.$store.getters.GetAgentCoupons(1)
    
  },
  
  data() {
    return {
     coupons:[],
      pageLength: 7,
      dir: false,
      codeBasic,
      columns: [
      {
        label:'السعر',
        field:'price'
      },
      {
        label:'رقم القسيمة',
        field:'billNumber'
      },
        {
          label: 'الشركة',
          field: 'companyName',
          
        },
         {
          label: 'التاريخ',
          field: 'date',
        },
        {
          label: 'البيان',
          field: 'details',
          
        },
        {
          label: 'التفاصيل',
          field: 'action',
          width:'27%',
        },
      ],
      searchTerm: '',

    }
  },
  methods: {
AddCoupon(){
    this.$router.push({name:'add-coupon'})
},
EditCoupon(coupon){
    this.$router.push(
        {
        name:'add-coupon',
        params:{coupon:coupon}
        }
        )
}
  },
  computed: {
    direction() {
      if (store.state.appConfig.isRTL) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.dir = true
        return this.dir
      }
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.dir = false
      return this.dir
    },

  },

}
</script>

<style lang="scss" scoped>

</style>

    