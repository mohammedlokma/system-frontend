  <template>
  <div>
  <div  style="display:flex">
    <b-form-datepicker
    class="date"
    v-model="from"
      id="datepicker-buttons"
      placeholder="من"
      today-button
      reset-button
      close-button
      locale="en"
    />
        <b-form-datepicker
   class="date"
      id="datepicker-buttonss"
      v-model="to"
      placeholder="إلى"
      today-button
      reset-button
      close-button
      locale="en"
    />
  </div>

    <b-modal
      id="modal-dangerr"
      centered
      header="test"
      header-class="justify-content-center"
      title="تأكيد الحذف"
      hide-footer
    >
      <div class="col-12 text-center">
        <p><strong>هل انت متأكد من حذف الجميع</strong>؟</p>
        <p
          v-for="receipt in this.receipts"
          :key="receipt.id.toString()"
          style="color: red"
        >
          {{ receipt.id }}
        </p>
        <b-button
          variant="primary"
          size="sm"
          class="mt-2 mr-2"
          @click="DeleteAllagents() + $bvModal.hide('modal-dangerr')"
        >تأكيد</b-button>
        <b-button
          variant="danger"
          size="sm"
          class="mt-2 ml-2"
          @click="$bvModal.hide('modal-dangerr')"
        >إلغاء</b-button>
      </div>
    </b-modal>

    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="this.filteredReceipts"
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
     <template  slot="table-column" slot-scope="props">
     <span  v-if="props.column.label =='التفاصيل'">
      <span>التفاصيل</span>
      <button
      
     style="padding: 4px;
    margin-left: -37vh;
    margin-right: 3vh;"
      class="btn btn-primary"
    > 
    <feather-icon
                icon="FileTextIcon"
                size="18"
              />
    
     طباعة تقرير كامل
    </button>
        <button
      v-b-modal.modal-dangerr
     style="float:left;padding: 8px;"
      class="btn btn-danger"
    > 
      حذف الكل
    </button>
     </span>
  </template>

      <template
        slot="table-row"
        slot-scope="props"
      >
        <!-- Column: companyId -->
        <span
          v-if="props.column.field === 'companyId'"
          class="text-nowrap"
        >
        
          <span class="text-nowrap">{{ props.row.companyId }}</span>
        </span>

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'" style="">
   

          <button
            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
            variant="outline-danger"
            style="margin-right: 16px"
            class="btn btn-danger"
            @click="$bvModal.show(props.row.id.toString())"
          >
            <feather-icon
              icon="Trash2Icon"
              size="12"
            />
          </button>
          <b-modal
            :id="props.row.id.toString()"
            centered
            header="test"
            header-class="justify-content-center"
            title="تأكيد الحذف"
            hide-footer
          >
            <div class="col-12 text-center">
              <p>
                <strong>هل انت متأكد من حذف</strong><strong style="color: red; padding: 5px">{{ props.row.id }}</strong>؟
              </p>
              <b-button
                variant="primary"
                size="sm"
                class="mt-2 mr-2"
                @click="DeleteAgent(props.row.id) + $bvModal.hide(props.row.id.toString())"
              >تأكيد</b-button>
              <b-button
                variant="danger"
                size="sm"
                class="mt-2 ml-2"
                @click="$bvModal.hide(props.row.id.toString())"
              >إلغاء</b-button>
            </div>
          </b-modal>
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
  </div>
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
props:['id'],
  mounted() {
    if(this.id){
       this.receipts =  this.$store.getters.GetClientReceipts(this.id)
    } 
  },
  
  data() {
    return {
     receipts:[],
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
          field: 'companyId',
          
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
        from:new Date('2022-11-20').toISOString().split('T')[0],
        to:new Date('2022-11-22').toISOString().split('T')[0],
      searchTerm: '',

    }
  },
  methods: {

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
filteredReceipts(){
  return (this.receipts.filter(i => {var time = (i.date)
                             return (this.from < time && time < this.to);
                            }))

}
  },

}
</script>

<style lang="scss" scoped>

.date{
    max-width: 400px;
    padding: 1;
    margin-right: 9vh;
    margin-bottom: 4vh;
}

</style>

    