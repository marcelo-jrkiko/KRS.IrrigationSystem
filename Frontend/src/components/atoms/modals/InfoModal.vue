<script lang="ts">

export default {
    name: 'InfoModal',
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}
</script>

<template>
  <b-modal :title="title" size="lg" hide-footer id="infos">
    <slot></slot>
  </b-modal>
</template>

<style>
.modal-header{
  border-bottom: 1px solid rgba(11, 26, 0, 0.5)!important;
  padding: 2rem!important;
}
.modal-header .btn-close {
  --bs-btn-close-bg: url('assets/img/btn-close.svg');
  --bs-btn-close-opacity: 1;
}
.modal-body {
    padding: 2rem!important;
}
.modal-content{
  font-family: 'DM Sans', sans-serif;
  background-color: #FFF3E5!important;
  color: #0B1A00!important;
  border-radius: 0px!important;
}
.modal-title{
  color: #1C4000;
  font-size: 24px;
  font-weight: 700;
  padding-left: 5px;
}
.modal-content th{
  color: #0B1A00!important;
}
.modal-content p{
  color: #0B1A00!important;
}
#infos .table{
  --bs-table-bg: transparent!important;
}
</style>