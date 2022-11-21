<template>
  <b-card-code
    title=""
    style="margin-top: 0px"
  >

<agent-card :id="id" @toggle="ToggleTables" />
<div  v-if="toggleTables">
  <payments :id="id" />
</div>
<div  v-else>
<receipts :id="id" />
</div>
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
import agentCard from './agent-card.vue'

import payments from './payments.vue'
import receipts from './receipts.vue'

export default {
  components: {
    'agent-card': agentCard,
    'receipts': receipts,
    'payments': payments,
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

  data() {
    return {
    
      pageLength: 7,
      dir: false,
      codeBasic,
      columns: [
        {
          label: 'السعر',
          field: 'price',
          
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
        },
      ],
        from:new Date('2022-11-20').toISOString().split('T')[0],
        to:new Date('2022-11-22').toISOString().split('T')[0],
      searchTerm: '',
      toggleTables:false

    }
  },
  methods: {
    ToggleTables(value){
      this.toggleTables = value
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