<template>
    <table-lite :is-loading="isLoading" :columns="tableColumns" :rows="Source" 
        :total="totalRows" :is-slot-mode="true" :sortable="false" :is-hide-paging="true">

        <template v-slot:edit="data">
            <a @click="onEdit(data.value)">
                <i class="btn btn-outline-dark fa fa-pencil item-edit" />
            </a>
        </template>

        <template v-slot:delete="data">
            <a @click="onDelete(data.value)">
                <i class="btn btn-outline-dark fa fa-trash item-delete"/>
            </a>
        </template>

        <template v-for="(_, slot) in $slots" v-slot:[slot]="data">
            <slot :name="slot" :value="data.value">
            </slot>
        </template>
    </table-lite>

    <b-pagination align="center" pills size="sm" v-if="allowPaging" :total-rows="totalRows" :per-page="pageSize" v-model="_currentPage" @update:model-value="onPageChange" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableLite from 'vue3-table-lite/ts';

export default defineComponent({
    name: "DataTable",
    components: { TableLite },
    emits: ["on-edit", "on-delete", "on-page-change"],
    props: {
        Source: Array<any>,
        Columns: Array<any>,
        isLoading: Boolean,
        totalRows: Number,
        allowPaging: Boolean,
        pageSize: Number,
        editButton: Boolean,
        deleteButton: Boolean,
        currentPage: Number
    },
    data() {
        return {
            _currentPage: 1
        }
    },
    watch: {
        currentPage(val, oldVal) {
            if(val !== this._currentPage) {
                this._currentPage = val;
            }
        }
    },
    computed: {
        numOfResults() {
            return this.Source?.length;
        },
        tableColumns() {
            const original : Array<any> = this.Columns!.slice();

            if(this.editButton) {
                original?.push( {
                        label: "Editar",
                        field: "edit",
                        width: "5%",
                        sortable: false,
                    });
            }

            if(this.deleteButton) {
                original?.push( {
                    label: "Apagar",
                    field: "delete",
                    width: "5%",
                    sortable: false,
                });
            }

            return original;
        }
    },    
    methods: {
        onEdit(item: any) {
            this.$emit("on-edit", item);
        },
        onDelete(item: any) {
            this.$emit("on-delete", item);
        },
        onPageChange(newPage: number) {
            this.$emit("on-page-change", newPage);
        }
    },
});
</script>
<style>
.vtl-table {
    display: table !important;
    text-align: center;
}
</style>