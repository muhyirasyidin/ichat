<template>
  <div class="chatbox__detail__header d-flex align-items-center">
    <!-- Begin::Header Action -->
    <font-awesome-icon :icon="['fas', 'xmark']" @click="handleClose" />
    <!-- End::Header Action -->

    <!-- Begin::Header Title -->
    <p class="m-0">User Information</p>
    <!-- End::Header Title -->
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const detail = computed(() => store.getters['message/getDetail']);
const store = useStore();

const handleClose = () => {
  store.commit('message/setDetail', !detail.value);
};
</script>
