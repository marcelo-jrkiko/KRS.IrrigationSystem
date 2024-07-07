<script lang="ts">
import BasicLayout from '@/components/layout/BasicLayout.vue'

export default {
  name: 'HomePage',
  components: {
    BasicLayout,
  },
}
</script>

<template>
  <basic-layout>
    <!-- HERO -->
    <b-container fluid class="hero" :style="'background-image: url('+$getAssetsURL('img/header.jpg')+');'">
      <BlockContent :link-name="'Mapa'" :col-qtd="'6'" :offset-qtd="'3'" :col-class="'px-3 px-md-5'" :title-class="'green'" :button-class="'btn b-yellow'" :title="$t('home.blocks.hero.title')" :button-text="$t('home.blocks.hero.button')">
        <p class="py-3 pe-md-5">{{$t('home.blocks.hero.content')}}</p>
      </BlockContent>
    </b-container>
    <!-- PRIMEIRO BLOCO BOLETIM
    <b-container fluid class="bg-yellow py-5">
      <BlockContent :col-qtd="'6'" :offset-qtd="'3'" :col-class="'px-3 px-md-5'" :title="$t('home.blocks.first.title')" :button-text="$t('home.blocks.first.button')">
        <p>{{$t('home.blocks.first.content')}}</p>
      </BlockContent>
      <b-row class="mt-5 mx-0">
        <BlockContent :col-qtd="'3'" :offset-qtd="'3'" :col-class="'ps-md-5'">
          <BlockLink :img-class="'thumb'" :src="'img/mapa-dumb.jpg'"  :alt="'Plataforma'" />
        </BlockContent>
        <BlockContent :col-qtd="'3'" :title-class="'pt-3 pt-md-0'" :button-class="'btn b-green'" :title="$t('home.blocks.second.title')" :button-text="$t('home.blocks.second.button')">
          <p class="pe-md-5">{{ $t('home.blocks.second.content') }}</p>
        </BlockContent>
      </b-row>
    </b-container> -->
    <!-- PRIMEIRO BLOCO POVOS INDÍGENAS-->
    <b-container fluid class="bg-yellow py-5">
      <b-row class="mx-0">
        <BlockContent :col-qtd="'3'" :offset-qtd="'3'" :col-class="'ps-md-5'">
          <BlockLink :img-class="'thumb pt-md-1'" :src="'img/home-povos.jpg'" :alt="$t('home.blocks.fourth.title')" />
        </BlockContent>
        <BlockContent :link-name="'Povos'" :col-qtd="'3'" :title-class="'pt-3 pt-md-0 tit-home'" :button-class="'btn b-green'" :title="$t('home.blocks.fourth.title')" :button-text="$t('home.blocks.fourth.button')">
          <p class="pe-md-5">{{ $t('home.blocks.fourth.content') }}</p>
        </BlockContent>
      </b-row>
    </b-container>
    <!-- SEGUNDO BLOCO -->
    <b-container fluid class="bg-green py-5">
      <b-row class="mx-0">
        <BlockContent :link-name="'Metodologia'" :col-class="'ps-md-5'" :col-qtd="'3'" :offset-qtd="'3'" :button-class="'btn b-yellow'" :title="$t('home.blocks.third.title')" :button-text="$t('home.blocks.third.button')" :title-class="'tit-home'"  :col-sm-qtd="'12'">
          <p>{{ $t('home.blocks.third.content') }}</p>
        </BlockContent>
        <BlockContent :col-qtd="'3'" :col-class="'ps-md-1 pt-3 pe-md-5 pt-md-1'" :col-sm-qtd="'12'">
          <BlockLink :img-class="'thumb'" :src="'img/home-metodologia.jpg'"  :alt="$t('home.blocks.third.title')" />
        </BlockContent>
      </b-row>
    </b-container>
  </basic-layout>
</template>

<style scoped>
h2 {
  font-weight: bold;
}
.hero {
  color: #fff3e5;
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 10% 0 5% 0;
}
.bg-yellow {
  color: #1c4000;
  background-color: #fff3e5;
  padding: 3% 0;
}
.bg-green {
  color: #fff3e5;
  background-color: #295701;
  padding: 3% 0%;
}
@media (max-width: 480px) {
  .hero {
    padding: 45% 4% 10% 4%;
  }
  .bg-yellow {
    padding: 4%;
  }
  .bg-green {
    padding: 4%;
  }
}
</style>
<style>
.green{
  font-size: 33px;
  font-weight: 700;
}
.tit-home {
  font-size: 20px;
  font-weight: 700;
}
</style>