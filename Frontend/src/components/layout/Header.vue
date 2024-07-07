<script lang="ts">
// import LocaleSelector from '@/components/atoms/selectors/LocaleSelector.vue'
import NavLocaleLink from '@/components/atoms/navs/NavLocaleLink.vue';

export default {
  name: 'HeaderPage',
  components: { NavLocaleLink },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const header = document.querySelector('.main-header') as HTMLElement
      const navbarBrand = document.querySelector('.navbar-brand') as HTMLElement
      const logoOriginal = navbarBrand.querySelector('.logo-original') as HTMLImageElement

      if (header && navbarBrand) {
        if (scrollTop > 0) {
          header.style.backgroundColor = '#D49945'
          header.classList.add('header-small')
          navbarBrand.classList.add('scroll')
          const logoScrollSrc = logoOriginal.dataset.src
          if (logoScrollSrc) {
            logoOriginal.src = logoScrollSrc
          }
        } else {
          header.style.backgroundColor = 'transparent'
          header.classList.remove('header-small')
          navbarBrand.classList.remove('scroll')
          const logoOriginalSrc = logoOriginal.dataset.originalSrc
          if (logoOriginalSrc) {
            logoOriginal.src = logoOriginalSrc
          }
        }
      }
    },
  },
}
</script>

<template>
  <header>
    <b-container fluid>
        <b-row>
          <b-col>
             <h6>Kiko Retro Space - Irrigation System Remote Control</h6>
          </b-col>
        </b-row>
    </b-container>
  </header>
</template>

<style>

</style>
