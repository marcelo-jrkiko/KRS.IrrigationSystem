<script lang="ts">
export default {
  name: 'BlockLink',
  components: {
  },
  props: {

    imgClass: {
                type: String,
                required: false,
                default: ""
            },
    linkContent: {
              type: String,
              required: false,
              default: ""
          },
    href: {
            type: String,
            required: false,
            default: ""
        },
    src: {
            type: String,
            required: false,
            default: ""
        },
    alt: {
            type: String,
            required: false,
            default: ""
        },
  }
}

</script>

<template>
      <a :href="href" target="_blank" v-if="href && src">
        <img :src="$getAssetsURL(src)" :alt="alt" :class="imgClass"/>
      </a>
      <img :src="$getAssetsURL(src)" :alt="alt" :class="imgClass" v-if="src && !href"/>
      <a :href="href" target="_blank" v-if="href && !src"> {{ linkContent }}</a>
</template>

<style scoped>
  .thumb {
  max-height: 416px;
  width: -webkit-fill-available;
}
.text-yellow a {
  color: #fff3e5;
}
</style>
