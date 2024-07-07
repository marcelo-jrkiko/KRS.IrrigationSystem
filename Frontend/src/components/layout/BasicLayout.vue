<script lang="ts">
import HeaderFixedWidth from './Header.vue';
import FooterPage from './Footer.vue';
import LoaderOverlay from '../molecules/Layout/LoaderOverlay.vue';

export default {
  name: 'BasicLayout',
  components: {  LoaderOverlay, HeaderFixedWidth, FooterPage },
  props: {
    headerVariation: {
      default: "fixedwidth",
      type: String
    },
    footerVariation: {
      default: "true",
      type: String
    }
  },
  mounted() {
    document.title = import.meta.env.VITE_APP_TITLE;
  }
}

</script>

<template>
  <div class="page-container">
    <HeaderFixedWidth />
    <LoaderOverlay />
    
    <main class="content-wrap">
        <slot />
      </main>
    <FooterPage />
  </div>
</template>
<style>
.content-wrap {
  min-height: calc(100vh - 84px)!important;
  display: flex!important;
  flex-direction: column!important;
  flex: 1!important;
}
</style>