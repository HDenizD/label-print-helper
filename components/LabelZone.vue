<template>
  <div>
    <v-btn @click="isEditMode = !isEditMode">Drücken</v-btn>
    <div v-if="isEditMode">
      <v-text-field v-model="inputValue" />
    </div>
    <div v-else>
      <span>{{ inputValue }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const inputValue = ref('')
const isEditMode = ref(false)
</script>

<style scoped></style>
