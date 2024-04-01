<template>
  <div>
    <!-- Begin::Footer CC -->
    <div v-if="!pickedUp">
      <ChatboxFooterCC />
    </div>
    <!-- End::Footer CC -->

    <!-- Begin::Footer CC -->
    <div v-else>
      <ChatboxFooterIndividual />
    </div>
    <!-- End::Footer CC -->
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

/**
 * @Component
 */
import ChatboxFooterCC from '@/components/Chatbox/ChatboxFooterCC.vue';
import ChatboxFooterIndividual from '@/components/Chatbox/ChatboxFooterIndividual.vue';

const store = useStore();

const pickedUp = computed(() => store.getters['message/getPickedUp']);
</script>
