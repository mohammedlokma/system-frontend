<template>
<center>
  <p class="clearfix mb-0">
    <span class="float-md-center d-block d-md-inline-block mt-25">
      COPYRIGHT  © {{ new Date().getFullYear() }}
      <span  style="color:blue">Lokma</span>
      <span class="d-none d-sm-inline-block">, All rights Reserved</span>
    </span>

   
  </p>
</center>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
}
</script>
