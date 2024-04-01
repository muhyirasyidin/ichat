<template>
  <div class="chatbox__detail__details">
    <!-- Begin::Tab -->
    <div class="chatbox__detail__details__tab row m-0">
      <!-- Begin::Item -->
      <div
        class="chatbox__detail__details__tab__item col pt-2"
        :class="active === 'detail' ? 'active' : ''"
        @click="active = 'detail'"
      >
        <p class="text-center m-0">Details</p>
      </div>
      <!-- End::Item -->

      <!-- Begin::Item -->
      <div
        class="chatbox__detail__details__tab__item col pt-2"
        :class="active === 'history' ? 'active' : ''"
        @click="active = 'history'"
      >
        <p class="text-center">History</p>
      </div>
      <!-- End::Item -->
    </div>
    <!-- End::Tab -->

    <!-- Begin::Tab Content -->
    <div class="chatbox__detail__details__content">
      <DetailsSection v-if="active === 'detail'" />
      <HistorySection v-else />
    </div>
    <!-- End::Tab Content -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

/**
 * @Component
 */
import DetailsSection from '@/components/Chatbox/Detail/DetailsSection.vue';
import HistorySection from '@/components/Chatbox/Detail/HistorySection.vue';

const active = ref('detail');
</script>
