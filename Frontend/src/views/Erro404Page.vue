<script lang="ts">
import BasicLayout from '@/components/layout/BasicLayout.vue'

export default {
  name: 'Erro404Page',
  components: {
    BasicLayout,
  },
}
</script>

<template>
  <basic-layout>
    <!-- HERO -->
    <b-container
      fluid
      class="hero-sobre d-flex"
      :style="'background-image: url(' + $getAssetsURL('img/header-sobreaequipe.jpg') + ');'"
    >
      <b-row class="mx-0 align-items-end w-100">
        <BlockContent
          :col-qtd="'6'"
          :offset-qtd="'3'"
          :col-class="'px-3 px-md-5'"
          :title="$t('core.erro404')"
          :title-class="'green'"
        />
      </b-row>
    </b-container>
    <!-- PRIMEIRO BLOCO -->
    <b-container fluid class="bg-dark-green py-5 flex-grow-1">
      <b-row class="mx-0">
        <BlockContent
          :col-qtd="'6'"
          :offset-qtd="'3'"
          :col-class="'px-3 px-md-5'"
          :title-class="'pt-3 pt-md-5'"
          :link-name="'Home'"
          :button-class="'btn b-yellow my-5'"
          :button-text="$t('core.button404')"
        >
          <p v-html="$t('core.texto404')"></p>
        </BlockContent>
      </b-row>
    </b-container>
  </basic-layout>
</template>

<style scoped>
.hero-sobre {
  color: #fff3e5;
  height: 360px;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 10% 0 1% 0;
}
.bg-dark-green {
  color: #fff3e5;
  background-color: #0b1a00;
  padding: 3% 0;
}
.text-yellow {
  color: #e8a857;
  text-align: justify;
}
</style>