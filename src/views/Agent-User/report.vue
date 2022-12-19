<template>
  <b-card-code
    title=""
    style="margin-top: 30px"
  >
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

        <span v-if="props.column.field === 'Action'">
        <button
            style="margin-right: 16px"
            class="btn btn-primary"
            v-b-tooltip.hover.right="' تعديل الكومنت'"
            @click="EditComment(props.row.id)"
          >
          <feather-icon
              icon="EditIcon"
              size="12"
            />
           </button>
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
            label:'تعديل البيانات',
            field:'Action', 
        }
        this.columns.push(agentCommentObj)
        this.columns.push(companyCommentObj)
        this.columns.push(actionObj)
    this.rows = this.$store.getters.GetReportData
    .filter(i=>i.releaseStatus == false );
    //  i.agentName=== localStorage.getItem('userInfo').user_display_name
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
    }
  },
  methods: {
  EditComment(id){
    this.$router.push({
      name:'edit-agent-comment',
      params:{id:id}
    })
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
<style scoped>
.vgt-left-align,.sortable{
    max-width:120px
}
</style>
