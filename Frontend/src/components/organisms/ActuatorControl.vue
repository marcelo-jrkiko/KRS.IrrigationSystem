<script lang="ts">
import { ActuatorController } from '@/core/Backend/ActuatorController';
import { getDefaultClient } from '@/core/Backend/BackendClient';
import Swal from 'sweetalert2';


export default {
    name: "ActuatorControl",
    props: {
        name: String
    },
    data() {
        return {
            durationSelected: 0
        }
    },
    computed: {
    },
    mounted() {
      
    },
    methods: {
        async start() {
            const client = new ActuatorController(await getDefaultClient());
           
            if(this.durationSelected > 0) {
                await client.start(this.name!, this.durationSelected);
            }
            else {
                Swal.fire("Parametros incorretos", "Informe uma duração válida", "error");
            }
        },
        async stop() {
            const client = new ActuatorController(await getDefaultClient());           
            await client.stop(this.name!);
        }

    }
}
</script>

<template>
    <b-card class="bg-secondary text-white">
        <b-container>
            <b-row>
                <b-col>
                    Duração (em segundos)
                </b-col>
            </b-row>
            <b-row>             
                <b-col>
                    <BFormInput v-model="durationSelected" type="number" placeholder="Digite o tempo de duração" />
                </b-col>
            </b-row>
            <b-row class="mt-2">                
                <b-col cols=2>
                    <BButton variant="success" @click="start">Iniciar</BButton>
                </b-col>
                <b-col  cols=2>
                    <BButton variant="danger" @click="stop">Parar</BButton>
                </b-col>
            </b-row>
        </b-container>
    </b-card>
</template>