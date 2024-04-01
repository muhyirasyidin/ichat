<template>
  <div class="chatbox__footer-cc d-flex justify-content-end">
    <button class="btn" @click="handlePickedUp">
      Pickup
      <font-awesome-icon :icon="['fas', 'bell']" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const pickedUp = computed(() => store.getters['message/getPickedUp']);

const handlePickedUp = () => {
  store.commit('message/setPickedUp', !pickedUp.value);
};
</script>
