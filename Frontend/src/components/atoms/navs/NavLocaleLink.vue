<script lang="ts">
export default {
    name: "NavLocaleLink",
    props: {
        name: {
            type: String,
            required: true
        },
        titleKey: {
            type: String,
            required: true
        }
    },
    methods: {
        onNavigate() {
            const route = this.$tRouteByName(this.name);
            this.$router.push(route);
        }
    },
    computed: {
        isActive() {
            let route = this.$route.name as String;
            route = route.split(".")[0];
        return route === this.name;
        }
    }
    
}
</script>

<template>
       <b-nav-item @click="onNavigate" :class="{ 'highlighted': isActive }">{{ $t(titleKey) }}</b-nav-item>
</template>
<style>
  .highlighted {
  text-decoration-color: #fff3e5 !important;
  font-weight: bold !important;
}
</style>