<template>
  <div class="accordion-item">
    <b-collapse
      :id="computedId"
      v-model="modelValue"
      class="accordion-collapse"
      v-bind="$attrs"
      :aria-labelledby="`heading${computedId}`"
      :tag="tag"
      :toggle="toggle"
      :horizontal="horizontal"
      :visible="visible"
      :is-nav="isNav"
      v-on="events"
    >
      <template #header="{visible: toggleVisible, toggle}">
        <component :is="headerTag" :id="`heading${computedId}`" class="accordion-header">
          <button
            class="accordion-button"
            :class="{collapsed: !toggleVisible}"
            type="button"
            :aria-expanded="toggleVisible ? 'true' : 'false'"
            :aria-controls="computedId"
            @click="(p) => onToggle(p, toggle)"
          >
            <slot name="title"> {{ title }} </slot>
          </button>
        </component>
      </template>
      <div class="accordion-body">
        <slot />
      </div>
    </b-collapse>
  </div>
</template>

<script setup lang="ts">

/* eslint-disable */

import {inject, InjectionKey, onMounted, Ref, ref, toRef, watch} from 'vue';
import {useVModel} from '@vueuse/core';
import {BvTriggerableEvent} from 'bootstrap-vue-next';
import type {Booleanish} from 'bootstrap-vue-next/src/types/Booleanish';

const accordionInjectionKey: InjectionKey<{
  openItem: Readonly<Ref<string>>
  free: Readonly<Ref<boolean>>
  setOpenItem: (id: string) => void
}> = Symbol('accordion')

interface BAccordionItemProps {
  id?: string
  title?: string
  modelValue?: Booleanish
  headerTag?: string
  tag?: string
  toggle?: Booleanish
  horizontal?: Booleanish
  visible?: Booleanish
  isNav?: Booleanish
}

const props = withDefaults(defineProps<BAccordionItemProps>(), {
  headerTag: 'h2',
  id: undefined,
  title: undefined,
  modelValue: false,
  visible: false,
})

interface BAccordionItemEmits {
  (e: 'show', value: BvTriggerableEvent): void
  (e: 'shown', value: BvTriggerableEvent): void
  (e: 'hide', value: BvTriggerableEvent): void
  (e: 'hidden', value: BvTriggerableEvent): void
  (e: 'hide-prevented'): void
  (e: 'show-prevented'): void
  (e: 'update:modelValue', value: boolean): void
}

const emit = defineEmits<BAccordionItemEmits>()

const events = {
  'show': (e: BvTriggerableEvent) => emit('show', e),
  'shown': (e: BvTriggerableEvent) => emit('shown', e),
  'hide': (e: BvTriggerableEvent) => emit('hide', e),
  'hidden': (e: BvTriggerableEvent) => emit('hidden', e),
  'hide-prevented': () => emit('hide-prevented'),
  'show-prevented': () => emit('show-prevented'),
}

const onToggle = function (payload: MouseEvent, collapsedToggle: any)  {
  collapsedToggle(payload);
}

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const parentData = inject(accordionInjectionKey, null)

const computedId = "__BVID__" + Math.random().toString().slice(2, 8)+ "___BV_accordion_item__";

onMounted(() => {
  if (modelValue.value && !parentData?.free.value) {
    parentData?.setOpenItem(computedId)
  }
  if (!modelValue.value && parentData?.openItem.value === computedId) {
    modelValue.value = true
  }
})

watch(
  () => parentData?.openItem.value,
  () =>
    (modelValue.value = parentData?.openItem.value === computedId && !parentData?.free.value)
)
watch(modelValue, () => {
  if (modelValue.value && !parentData?.free.value) parentData?.setOpenItem(computedId)
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>