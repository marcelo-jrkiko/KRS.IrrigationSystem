<script lang="ts">
export default {
  name: 'BlockContent',
  components: {},
  props: {
    colQtd: {
      type: String,
      required: false,
      default: '',
    },
    offsetQtd: {
      type: String,
      required: false,
      default: '',
    },
    colClass: {
      type: String,
      required: false,
      default: '',
    },
    titleClass: {
      type: String,
      required: false,
      default: '',
    },
    buttonClass: {
      type: String,
      required: false,
      default: '',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    buttonText: {
      type: String,
      required: false,
      default: '',
    },
    linkUrl: {
      type: String,
      required: false,
      default: '',
    },
    linkName: {
      type: String,
      default: '',
    },
  },
  methods: {
    getLinkUrl(linkName: string) {
      const route = this.$tRouteByName(linkName)
      return route.fullPath
    },
  },
}
</script>

<template>
  <b-col :md="colQtd" :offset-md="offsetQtd" :class="colClass" sm="12">
    <h2 :class="titleClass" v-html="title" v-if="title" />
    <slot></slot>
    <a v-if="buttonText && linkName" :href="getLinkUrl(linkName)" :class="buttonClass">{{ buttonText }}</a>
  </b-col>
</template>

<style scoped>
.b-green {
  color: #fff3e5;
  font-weight: bold;
  background-color: #1c4000;
  border-radius: 0;
}
.b-green:hover {
  color: #1c4000;
  border: 1px solid #1c4000;
  background-color: #fff3e5;
}
.b-yellow {
  color: #d49945;
  font-weight: bold;
  background-color: transparent;
  border-radius: 0;
  border-color: #d49945;
}
.b-yellow:hover {
  color: #1c4000 !important;
  background-color: #d49945;
}
</style>
