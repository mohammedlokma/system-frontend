<template>
  <b-card-code
    title=""
    style="margin-top: 30px"
  >
  <b-row>
    <b-col md="2">
    <button
      style="margin-top: -60px; float: right"
      class="btn btn-primary"
      @click="AddColumn"
    >
      إضافة خانه
    </button>
  </b-col>
  <b-col md="2">
    <button
      style="margin-top: -60px;float: right"
      class="btn btn-primary"
      @click="AddRow"
    >
       إضافة داتا
    </button>
  </b-col>
  </b-row>
    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="rows"
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
<span v-if="props.column.field === 'Release'">
          <button
            style=""
            class="btn btn-success"
            v-b-tooltip.hover.right="'تم الإفراج عن الشحنه'"
            @click="$bvModal.show('release'+props.row.id.toString())"
          >
            <feather-icon
              icon="EditIcon"
              size="12"
            />
          </button>
      <b-modal
      :id="'release'+props.row.id.toString()"
      centered
      header="test"
      header-class="justify-content-center"
      title="تأكيد الإفراج"
      hide-footer
    >
      <div class="col-12 text-center">
        <b-form-group
            label="تاريخ الإفراج عن الشحنه"
            label-for="v-releaseDate"
            style="font-size:20px"
          >
            <b-form-input
              id="v-releaseDate"
              type="date"
              v-model="releaseDate"
              
            />
          </b-form-group>
     
        <b-button
          variant="success"
          size="sm"
          class="mt-2 mr-2"
          @click="ReleaseDone(props.row.id) + $bvModal.hide('release'+props.row.id.toString())"
        >تأكيد</b-button>
        <b-button
          variant="primary"
          size="sm"
          class="mt-2 ml-2"
          @click="$bvModal.hide('release'+props.row.id.toString())"
        >إلغاء</b-button>
      </div>
    </b-modal>
        </span>
        <span v-else-if="props.column.field === 'Action'">
            <span>
            <b-dropdown
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
            >
              <template v-slot:button-content >
                <feather-icon
                  icon="MoreVerticalIcon"
                  size="16"
                  class="text-body align-bottom mr-25"
                />
              </template>
              <b-dropdown-item>
                <button
            style=""
            class="btn btn-primary"
            v-b-tooltip.hover.right="'تعديل'"
            @click="EditRow(props.row.id)"
          >
            <feather-icon
              icon="EditIcon"
              size="12"
            />
          </button>
              </b-dropdown-item>
              <b-dropdown-item>
                     <button
            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
            variant="outline-danger"
            v-b-tooltip.hover.right="'حذف'"
            class="btn btn-danger"
            @click="$bvModal.show(props.row.id.toString())"
          >
            <feather-icon
              icon="Trash2Icon"
              size="12"
            />
          </button>
              </b-dropdown-item>
            </b-dropdown>
          </span>
          

         
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
                <strong >هل انت متأكد من الحذف ؟ </strong>
              </p>
              <b-button
                variant="primary"
                size="sm"
                class="mt-2 mr-2"
                @click="DeleteRow(props.row.id) + $bvModal.hide(props.row.id.toString())"
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
    VBTooltip,
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
  BRow,
  BCol
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import Ripple from 'vue-ripple-directive'
import { codeBasic } from '../code'

export default {
  components: {
    BCardCode,
    VueGoodTable,
    VBTooltip,
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
    BRow,
     BCol
  },

  directives: {
    'b-modal': VBModal,
    'b-tooltip': VBTooltip,
    Ripple,
  },

  mounted() {
    this.reportItems = this.$store.getters.GetReportItems;
    for(var i=0;i<this.reportItems.length;i++){
        let obj = {
            label:this.reportItems[i].arabicName,
            field:this.reportItems[i].name,
            filterOptions:{
                enabled:true,
                placeholder:'بحث ' + this.reportItems[i].arabicName
            }
        }
        this.columns.push(obj)
    }
    let agentCommentObj = {
      label:'ملاحظات المندوب',
      field:'agentComment',
    } 
    let companyCommentObj =  {
            label:'ملاحظات الشركة',
            field:'companyComment', 
        }

    let actionObj =  {
            label:'التفاصيل',
            field:'Action', 
        }
        let releaseObj =  {
            label:'الإفراج',
            field:'Release', 
        }
        this.columns.push(agentCommentObj)
        this.columns.push(companyCommentObj)
        this.columns.push(releaseObj)
        this.columns.push(actionObj)
    this.rows = this.$store.getters.GetReportData.filter(i=>i.releaseStatus == false);
  },
  
  data() {
    return {
     admins:[],
      pageLength: 7,
      dir: false,
      codeBasic,
      reportItems:[],
      columns: [],
      rows:[],
      searchTerm: '',
      releaseDate:null
    }
  },
  methods: {
   AddColumn(){
        this.$router.push('add-report-item')
   },
   AddRow(){
    this.$router.push('add-row')
   },
   EditRow(id){
      this.$router.push({
        name:'add-row',
        params:{id:id}
      })
   },
   DeleteRow(){},
   ReleaseDone(id){
    let row = this.rows.find(i=>i.id == id)
    row.releaseStatus = true
    this.rows = this.rows.filter(i=>i.releaseStatus == false)
    const payload = {
      id:id,
      releaseDate:this.releaseDate
    }
    this.$store.commit('ReleaseDone',payload)
  },
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

<style lang="scss" >

</style>
<style scoped>
.vgt-left-align,.sortable{
    max-width:120px
    
}
</style>
