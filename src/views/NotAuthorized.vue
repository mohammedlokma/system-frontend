<template>
  <div class="misc-wrapper">
    

    <div class="misc-inner p-2 p-sm-3">
      <div class="w-100 text-center">
        <h2 class="mb-1">
         غير مصرح لك بالدخول! 🔐
        </h2>
        <p class="mb-2">
         ليس لديك صلاحيات للدخول. اذهب إلى الصفحة الرئيسية!!
        </p>
        <b-button
          variant="primary"
          class="mb-1 btn-sm-block"
          @click="GoToHomePage()"
        >الذهاب إلى الصفحة الرئيسية</b-button>
        <b-img
          fluid
          :src="imgUrl"
          alt="Not authorized page"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { BLink, BImg, BButton } from 'bootstrap-vue'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import store from '@/store/index'
//import { getHomeRouteForLoggedInUser } from '@/auth/utils'

export default {
  components: {
    BLink, BImg, BButton, VuexyLogo,
  },
  data() {
    return {
      downImg: require('@/assets/images/pages/not-authorized.svg'),
    }
  },
  computed: {
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.downImg = require('@/assets/images/pages/not-authorized-dark.svg')
        return this.downImg
      }
      return this.downImg
    },
  },
  methods: {
    GoToHomePage() {
      this.$router.push({name:'home'})
      // const user = JSON.parse(localStorage.getItem('userData'))
      // return getHomeRouteForLoggedInUser(user ? user.role : null)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-misc.scss';
</style>
