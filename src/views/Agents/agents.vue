<template>
  <b-card-code
    title=""
    style="margin-top: 30px"
  >
  
    <button
      style="margin-top: -60px; float: right"
      class="btn btn-primary"
      @click="AddAgent"
    >
      إضافة مندوب
    </button>
    

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
          v-for="agent in this.agents"
          :key="agent.id.toString()"
          style="color: red"
        >
          {{ agent.name }}
        </p>
        <b-button
          variant="primary"
          size="sm"
          class="mt-2 mr-2"
          @click="DeleteAllAgents() + $bvModal.hide('modal-dangerr')"
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
      :rows="this.agents"
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
      v-b-modal.modal-dangerr
     style="float:left;padding-top:0px"
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
          v-if="props.column.field === 'name'"
          class="text-nowrap"
        >
          <!-- <b-avatar
            :src="props.row.avatar"
            class="mx-1"
          /> -->
          <span class="text-nowrap">{{ props.row.name }}</span>
        </span>
        <!-- Column: service places  -->
        <span v-else-if="props.column.field === 'servicePlaces'"
         class="text-nowrap"  >
  <span v-for="place in props.row.servicePlaces " :key="place.id" 
  class=" btn btn-success" style="margin-right:10px;">
        
           {{ place.name }}
          </span>
         
        </span>
       

        <!-- Column: Action -->
        <span v-else-if="props.column.field === 'action'">
           <button
            style="margin-right: 16px"
            class="btn btn-primary"
            @click="ViewDetails(props.row.id)"
          >
          <feather-icon
              icon="EyeIcon"
              size="12"
            />
           </button>
          <button
            style="margin-right: 16px"
            class="btn btn-primary"
            @click="Editagent(props.row)"
          >
            <feather-icon
              icon="EditIcon"
              size="12"
            />
          </button>

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
                <strong>هل انت متأكد من حذف</strong><strong style="color: red; padding: 5px">{{ props.row.name }}</strong>؟
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
  },

  directives: {
    'b-modal': VBModal,
    Ripple,
  },
props:['id'],
  mounted() {
    if(this.id){
       this.agents =  this.$store.getters.GetAgents.filter(i => 
                i.servicePlaces.some(s => s.id == this.id)
                
            );
    }
    else{
    this.agents = this.$store.getters.GetAgents;
    }
    
  },
  
  data() {
    return {
     agents:[],
      pageLength: 7,
      dir: false,
      codeBasic,
      columns: [
        {
          label: 'الاسم',
          field: 'name',
           filterOptions: {
            enabled: true,
            placeholder: 'بحث بالاسم ',
          },
        },
        {
          label: 'اسم المستخدم',
          field: 'username',
           filterOptions: {
            enabled: true,
            placeholder: 'بحث باسم المستخدم',
          },
        },
         {
          label: ' أماكن الخدمة',
          field: 'servicePlaces',
           filterOptions: {
            enabled: true,
            placeholder: 'بحث باسم أماكن الخدمة',
          },
        },
        
        {
          label: 'التفاصيل',
          field: 'action',
        },
      ],

      searchTerm: '',
    }
  },
  methods: {
    AddAgent() {
      this.$router.push( 'agent-update' )
    },

    Editagent(row) {
      this.$router.push({
        name: 'agent-update',
        // preserve current path and remove the first char to avoid the target URL starting with `//`
        params: {  id:row.id },
        // preserve existing query and hash if any
        query: this.$route.query,
        //hash: `?id=${row.id}`,
      })
    },
    DeleteAgent(id) {
      this.agents = this.agents.filter(i=>i.id !== id);

      store.commit('DeleteAgent', id)
    },

    DeleteAllAgents() {
      this.agents = [];
      store.commit('DeleteAgents')
    },
    ViewDetails(id){
      this.$router.push({
        name:'agent-details',
        params:{id:id},
        //hash
      })
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

<style lang="scss">
@import "@core/scss/vue/libs/vue-good-table.scss";
.vgt-left-align{
    max-width: 25%;
}
</style>
