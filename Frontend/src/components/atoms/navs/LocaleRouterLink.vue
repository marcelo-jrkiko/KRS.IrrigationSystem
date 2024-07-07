<script lang="ts">
import { RouteLocationNamedRaw } from 'vue-router';

export default {
    name: 'LocaleRouterLink',
    props: {
        name: {
            type: String,
            required: true
        },
        params: {
            type: Object,
            required: false
        }
    },
    computed: {
        myRouteLocation() : RouteLocationNamedRaw {
            return {
                name: this.$tRoute(this.name),
                params: this.params
            };
        },
        isActive() {
            return this.$route.name === this.name;
        }
    }
}
</script>

<template>
<router-link :to="myRouteLocation" :class="{ 'highlighted': isActive }">
    <slot />
</router-link>
</template>
<style>
  .highlighted {
  text-decoration-color: #fff3e5 !important;
  font-weight: bold !important;
}
</style>