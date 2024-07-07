<script lang="ts">
export default {
    name: "LocaleSelector",
    computed: {
        myCurrentLocale() {
            return this.$t('name');
        }
    },
    methods: {
        setLocale(lang: string) {
            this.$setLocale(lang);

            const currentName = this.$router.currentRoute.value.name;
            const pieces = currentName!.toString().split('.');
            var newRouteName = "";

            if(pieces!.length > 1) {
                pieces.pop();
                newRouteName = pieces.join('.');
            } else {
                newRouteName = pieces[0];
            }

            this.$router.push(this.$tRouteByName(newRouteName));
        }
    }
}

</script>

<template>
    <b-nav-item-dropdown :text="myCurrentLocale" right class="no-caret">
            <b-dropdown-item-button @click="setLocale('en-us')">EN</b-dropdown-item-button>
            <b-dropdown-item-button @click="setLocale('pt-br')">PT</b-dropdown-item-button>
    </b-nav-item-dropdown>
</template>