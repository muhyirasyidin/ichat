<template>
  <div class="contact__header m-0 p-0 d-flex align-items-center">
    <!-- Begin::Toggle Sidebar -->
    <font-awesome-icon :icon="['fa', 'bars']" @click="handleToggleSidebar" />
    <!-- End::Toggle Sidebar -->

    <!-- Begin::Header -->
    <p class="mt-3">Chat</p>
    <!-- Begin::Header -->
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';

const store = useStore();

const handleToggleSidebar = () => {
  store.commit('config/setSidebar', !store.getters['config/getSidebar']);
};
</script>
