<template>
  <div id="print-area">
    <component :is="selectedLayout" />
  </div>
</template>

<script setup lang="ts">
import FullPrint from '~/components/FullPrint.vue'
import SplitPrint from '~/components/SplitPrint.vue'
import GridPrint from '~/components/GridPrint.vue'

type Layout = 'full' | 'grid' | 'split'

const props = defineProps({
  layout: {
    type: String as PropType<Layout>,
    default: 'full' as Layout,
  },
})

const selectedLayout = computed(() => {
  switch (props.layout) {
    case 'grid':
      return GridPrint
    case 'split':
      return SplitPrint
    case 'full':
    default:
      return FullPrint
  }
})
</script>

<style scoped></style>
