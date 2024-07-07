<script lang="ts">
import { ActuatorController } from '@/core/Backend/ActuatorController';
import { getDefaultClient } from '@/core/Backend/BackendClient';

export default {
    name: "ActuatorStateView",
    props: {
        name: String
    },
    data() {
        return {
            state: "NOT_SYNCED",
            elapsedTime: 0
        }
    },
    computed: {
        elapsedTimeHuman() {
            if (this.elapsedTime == 0 || this.state !== "RUNNING") {
                return "-";
            }

            let seconds = (this.elapsedTime / 1000);
            let minutes = (this.elapsedTime / (1000 * 60));
            let hours = (this.elapsedTime / (1000 * 60 * 60));
            let days = (this.elapsedTime / (1000 * 60 * 60 * 24));
            if (seconds < 60) return seconds.toFixed(1) + " Segundos";
            else if (minutes < 60) return minutes.toFixed(1) + " Minutos";
            else if (hours < 24) return hours.toFixed(1) + " Horas";
            else return days + " Dias"
        }
    },
    mounted() {
        this.updateState();
        setInterval(this.updateState, 5000);
    },
    methods: {
        async updateState() {
            const client = new ActuatorController(await getDefaultClient());
            const stateData = await client.getState(this.name!);

            this.elapsedTime = stateData.ElapsedTime;
            this.state = stateData.State;
        }
    }
}
</script>

<template>
    <b-card class="bg-secondary text-white">
        <b-container>
            <b-row>
                <b-col  class="fs-5">
                    Estado do Atuador: {{ name }}
                </b-col>
            </b-row>
            <b-row>
                <b-col class="fw-bold">
                    Estado
                </b-col>
                <b-col>
                    {{ state }}
                </b-col>
            </b-row>
            <b-row>
                <b-col class="fw-bold">
                    Tempo em ciclo ativo
                </b-col>
                <b-col>
                    {{ elapsedTimeHuman }}
                </b-col>
            </b-row>
        </b-container>
    </b-card>
</template>