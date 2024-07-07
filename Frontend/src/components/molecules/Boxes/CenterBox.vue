<script lang="ts">
export default {
  name: 'CenterBox',
  components: {
  },
  props: {
    title: String
  }
}

</script>

<template>
    <div class="card">
        <div class="card-title text-dark  pt-4 py-2 px-2">
          <b-row>
            <b-col alignSelf="start">
              <h5 class="box-title">{{ title }}</h5>
            </b-col>
            <b-col>
            </b-col>
            <b-col alignSelf="end">
                 <slot name="headerBox"></slot>
            </b-col>
          </b-row>
        </div>
        <div class="card-body">
            <slot>

            </slot>
        </div>
    </div>
</template>

<style scoped>
  .box-title {
    float: left;
    padding-left: 0.4rem;
  }

  .card {
    color: black;
  }
</style>
