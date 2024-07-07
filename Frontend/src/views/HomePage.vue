<script lang="ts">
import BasicLayout from '@/components/layout/BasicLayout.vue'
import { ActuatorController } from '@/core/Backend/ActuatorController';
import { getDefaultClient } from '@/core/Backend/BackendClient';
import vSelect from 'vue-select'
import ActuatorStateView from '@/components/organisms/ActuatorStateView.vue';
import ActuatorControl from '@/components/organisms/ActuatorControl.vue';

export default {
  name: 'HomePage',
  components: {
    BasicLayout,
    vSelect,
    ActuatorStateView,
    ActuatorControl
  },
  data() {
    return {
      actuators: [],
      currentActuator: {} as any
    }
  },
  mounted() {
    this.currentActuator = null;
    this.updateData();
    setInterval(this.updateData, 30000);
  },
  methods: {
    async updateData() {
      const client = new ActuatorController(await getDefaultClient());
      this.actuators = await client.getAll();
    }
  }
}
</script>

<template>
  <basic-layout>
    <b-container>
      <b-row>
        <b-col>
          <h4>Controle Remoto do Sistema de Irrigação</h4>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-card class="bg-info">
            Selecione o Atuador:
            <v-select :options="actuators" v-model="currentActuator" :label="'Name'">

            </v-select>
          </b-card>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="mt-2">
          <b-container v-if="currentActuator !== null && currentActuator.Name !== undefined">
            <b-row>
              <b-col cols="6">
                <ActuatorStateView :name="currentActuator.Name" :key="'actview' + currentActuator.Name">

                </ActuatorStateView>
              </b-col>
              <b-col>
                <ActuatorControl :name="currentActuator.Name" >

                </ActuatorControl>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
    </b-container>
  </basic-layout>
</template>

<style scoped></style>
