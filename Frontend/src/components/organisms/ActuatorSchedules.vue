<script lang="ts">
import { ActuatorController } from '@/core/Backend/ActuatorController';
import { getDefaultClient } from '@/core/Backend/BackendClient';
import { IActuatorData, IActuatorSchedule } from '@/core/Domain/IActuatorSchedule';
import Swal from 'sweetalert2';
import DataTable from '../tables/DataTable.vue';
import { ScheduleController } from '@/core/Backend/ScheduleController';


export default {
    name: "ActuatorSchedules",
    props: {
        name: String
    },
    components: { DataTable },
    data() {
        return {
            schedules: [] as Array<IActuatorSchedule>,
            currentPage: 1,
            newSchedule: undefined as IActuatorSchedule | undefined
        }
    },
    computed: {
        _tableData() {
            return this.schedules;
        },
        _tableColumns() {
            return [

                {
                    field: 'Name',
                    label: 'Nome',
                },
                {
                    field: 'Schedule',
                    label: 'Intervalo',
                },
                {
                    field: 'Duration',
                    label: 'Duração (s)',
                },
            ];
        }
    },
    mounted() {
        this.refreshData();
        this.resetNewSchedule();
    },
    methods: {
        async saveNewSchedule() {
            if (this.newSchedule == undefined) {
                await Swal.fire("Parametros Inválidos!", "Novo Job é inválido!", "warning");
                this.resetNewSchedule();
            }

            if (this.newSchedule!.Name.length <= 0) {
                await Swal.fire("Parametros Inválidos!", "Informe um Nome para o Job", "warning");
            }

            if (this.newSchedule!.Schedule.length <= 0) {
                await Swal.fire("Parametros Inválidos!", "Informe um Agendamento para o Job", "warning");
            }

            if (this.newSchedule!.Data.Duration <= 10) {
                await Swal.fire("Parametros Inválidos!", "A Duração tem que ser superior há 10 segundos", "warning");
            }

            try {


                const _client = new ScheduleController(await getDefaultClient());
                await _client.new(this.newSchedule!);

                this.refreshData();
                this.resetNewSchedule();
            } catch (error) {
                console.error(error);
                Swal.fire("Erro", "Ocorreu um problema ao tentar salvar o agendamento!", "error");
            }
        },
        async onDeleteTableItem(model: any) {
            const _alert = await Swal.fire({
                title: "Excluir o agendamento?",
                text: "Deseja realmente excluir este agendamento?",
                icon: "question",
                showConfirmButton: true,
                showCancelButton: true
            });
            if (_alert.isConfirmed) {
                try {
                    const _client = new ScheduleController(await getDefaultClient());
                    await _client.delete(model.Id);

                    await Swal.fire("Excluido!", "Agendamento excluido! é necessário reiniciar o controlador para que tenha efeito!", "success");
                } catch (error) {
                    console.error(error);
                    Swal.fire("Erro", "Ocorreu um problema ao tentar apagar o agendamento!", "error");
                }
            }

            this.refreshData();
        },
        async refreshData() {
            try {
                const _client = new ScheduleController(await getDefaultClient());
                this.schedules = await _client.find(this.name!);
            } catch (error) {
                console.error(error);
                Swal.fire("Erro", "Ocorreu um problema ao tentar refrescar os agendamentos!", "error");
            }
        },
        async resetNewSchedule() {
            this.newSchedule = {
                "Name": "",
                "Schedule": "",
                "Source": "ActuatorJob",
                "Data": {
                    "ActuatorName": this.name!,
                    "Duration": 0
                },
                "Id": "",
                "Filename": ""
            };
        }
    }
}
</script>

<template>
    <b-card class="bg-secondary text-white">
        <b-container class="mb-2">
            <b-row>
                <b-col class="fs-5">
                    Jobs do Atuador
                </b-col>
                <b-col class="text-end">
                    {{ name }}
                </b-col>
            </b-row>
        </b-container>
        <b-container >
            <b-row  class="mb-2">
                <b-col>
                    <DataTable @on-delete="onDeleteTableItem" :Source="_tableData" :total-rows="schedules.length"
                        :allow-paging="false" :Columns="_tableColumns" :edit-button="false" :currentPage="currentPage"
                        :delete-button="true">

                        <template v-slot:Duration="data">
                            {{ data.value.Data.Duration }} segundos
                        </template>
                    </DataTable>
                </b-col>
            </b-row>
            <b-row v-if="newSchedule !== undefined">
                <b-col class="fw-bold fs-6">
                    Adicionar um Job
                </b-col>
            </b-row>
            <b-row v-if="newSchedule !== undefined">
                <b-col>
                    <BFormGroup id="txtNameGrp" label="Nome:" label-for="txtName">
                        <BFormInput id="txtName" v-model="newSchedule.Name" placeholder="Descrição ou Nome do Job"
                            required />
                    </BFormGroup>
                </b-col>
                <b-col>
                    <BFormGroup id="txtDurationGrp" label="Duração (s):" label-for="txtDuration">
                        <BFormInput id="txtDuration" v-model="newSchedule.Data.Duration"
                            placeholder="Duração em Segundos" type="number" required />
                    </BFormGroup>
                </b-col>
            </b-row>
            <b-row v-if="newSchedule !== undefined">
                <b-col>
                    <BFormGroup id="txtScheduleGrp" label="Intervalo:" label-for="txtSchedule">
                        <BFormInput id="txtSchedule" v-model="newSchedule.Schedule" placeholder="Intervalo do Job"
                            required />
                    </BFormGroup>
                </b-col>
                <b-col cols=2 class="pt-4">
                    <BButton size="lg" variant="success" @click="saveNewSchedule">Salvar</BButton>
                </b-col>
            </b-row>
        </b-container>
    </b-card>
</template>