<template>
  <div class="relative d-flex flex-column h-screen">
    <header>header</header>
    <main class="flex-grow-1">
      <slot />
    </main>
    <footer>footer</footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
