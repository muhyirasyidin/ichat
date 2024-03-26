<template>
  <div class="contact__list__skeleton">
    <div v-for="(item, index) in 8" :key="index" class="placeholder-glow mb-2">
      <div>
        <span class="placeholder col-3"></span>
      </div>
      <div>
        <span class="placeholder col-12"></span>
        <span class="placeholder col-12"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
