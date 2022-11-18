<template>

  <b-card-code title="">
               

    <!-- search input -->
    <div class="custom-search d-flex justify-content-end">
      
      <b-form-group>
        <div class="d-flex align-items-center">
          <label class="mr-1">بحث</label>
          <b-form-input
            v-model="searchTerm"
            placeholder="بحث"
            type="text"
            class="d-inline-block"
          />
        </div>
      </b-form-group>
    </div>
     <button style="
          margin-top: -50px;
            float: right;" 
    class="btn btn-primary " 
    @click="addProject" >إضافة مشروع</button>

       <b-modal 
           centered 
           id="modal-dangerr" header="test" header-class="justify-content-center" 
           title="تأكيد الحذف" 
           hide-footer
            >
    
    <div class="col-12 text-center">
      <p>  <strong>هل انت متأكد من حذف الجميع</strong>؟</p>
      <p style="color:red" v-for="proj in this.$store.getters.getProjects" :key="proj.id">{{proj.fullName}}</p>
      <b-button @click="deleteAll() + $bvModal.hide('modal-dangerr')" variant="primary" size="sm" class="mt-2 mr-2">تأكيد</b-button>
      <b-button @click="$bvModal.hide('modal-dangerr')" variant="danger" size="sm" class="mt-2 ml-2">إلغاء</b-button>
    </div>
  </b-modal>

    <!-- table -->
    <vue-good-table
      :columns="columns"
      :rows="this.$store.getters.getProjects"
      :rtl="direction"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm }"
      
      :pagination-options="{
        enabled: true,
        perPage:pageLength
      }"
    >
     <template  slot="table-column" slot-scope="props">
     <span  v-if="props.column.label =='Action'">
      <span style="">التفاصيل</span>
        <button
      v-b-modal.modal-dangerr
     style="float:left;padding-top:7px;"
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

        <!-- Column: Name -->
        <span
          v-if="props.column.field === 'fullName'"
          class="text-nowrap"
        >
          <!-- <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          /> -->
          <span class="text-nowrap">{{ props.row.fullName }}</span>
        </span>

        <!-- Column: Status -->
        <span v-else-if="props.column.field === 'status'">
          <b-badge :class="[props.row.status ==='مكتمل' ? 'btn btn-success' : 'btn btn-secondary'  ]" :variant="statusVariant(props.row.status)">
            {{ props.row.status }}
          </b-badge>
        </span>

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'">

               
                <button @click="editProject(props.row)" style="margin-right:16px" class="btn btn-primary ">
                  <feather-icon
                icon="EditIcon"
                size="12"
              />
                </button>
                

 
                <button v-ripple.400="'rgba(234, 84, 85, 0.15)'"
        @click="$bvModal.show(props.row.id)"
        variant="outline-danger"
      style="margin-right:16px" class="btn btn-danger ">
       <feather-icon
                icon="Trash2Icon"
                size="12"
              />
              </button>
          <b-modal 
           centered header="test" header-class="justify-content-center" 
           title="تأكيد الحذف" 
           hide-footer
           :id= props.row.id
            >
    
    <div class="col-12 text-center">
      <p>  <strong>هل انت متأكد من حذف</strong><strong style="color:red; padding:5px">{{props.row.fullName}}</strong>؟</p>
      <b-button @click="deleteProject(props.row) + $bvModal.hide(props.row.id)" variant="primary" size="sm" class="mt-2 mr-2">تأكيد</b-button>
      <b-button @click="$bvModal.hide(props.row.id)" variant="danger" size="sm" class="mt-2 ml-2">إلغاء</b-button>
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
            <span class="text-nowrap ">
              عرض الصفحة الأولى
            </span>
            
            <b-form-select
              v-model="pageLength"
              :options="['3','7','10','15','20']"
              class="mx-1"
              @input="(value)=>props.perPageChanged({currentPerPage:value})"
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
              
              @input="(value)=>props.pageChanged({currentPage:value})"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronLeftIcon"
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
  BButton,BAvatar, BBadge,BModal, VBModal, BPagination, BFormGroup, BFormInput, BFormSelect, BDropdown, BDropdownItem,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import store from '@/store/index'
import { codeBasic } from './code'
import router from '@/router'
import Ripple from 'vue-ripple-directive'

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
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  mounted(){
  },
  data() {
    return {
      
      projects: [],
      pageLength: 7,
      dir: false,
      codeBasic,
      columns: [
        {
          label: 'اسم المشروع',
          field: 'fullName',
        },
        {
          label: 'الجهه',
          field: 'departement',
        },
        {
          label: 'الموقع',
          field: 'location',
        },
        {
          label: 'الحاله',
          field: 'status',
        },
        {
          label: 'المطور العقاري',
          field: 'developer',
        },
        {
          label: ' الاختيار',
          field: 'selectedOption',
        },
        {
          label: ' الاختيارات',
          field: 'options',
        },
        {
          label: 'Action',
          field: 'action',
        },
      ],
     
      searchTerm: '',
      status: [{
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      {
        1: 'light-primary',
        2: 'light-success',
        3: 'light-danger',
        4: 'light-warning',
        5: 'light-info',
      }],
    }
  },
  methods:{
    addProject(){
      router.push('/projectUpdate');
    },

    editProject(row){
      this.$router.push({
      name: 'projectUpdate',
  // preserve current path and remove the first char to avoid the target URL starting with `//`
        params: { project : row },
  // preserve existing query and hash if any
        query: this.$route.query,
        hash: "?id=" + row.id,
})
    },
    deleteProject(row){
      store.commit('deleteProject',row);
      
      
    },
    deleteAll(){
      store.commit('deleteProjects');
    }
  },

  computed: {
    statusVariant() {
      const statusColor = {
        /* eslint-disable key-spacing */
        Current      : 'light-primary',
        Professional : 'light-success',
        Rejected     : 'light-danger',
        Resigned     : 'light-warning',
        Applied      : 'light-info',
        /* eslint-enable key-spacing */
      }

      return status => statusColor[status]
    },
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
  created() {
    this.$http.get('/good-table/basic')
      .then(res => { this.rows = res.data })
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-good-table.scss";
</style>
