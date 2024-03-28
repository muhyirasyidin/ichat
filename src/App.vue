<template>
  <!-- Begin::Main Layout -->
  <article class="row m-0">
    <!-- Begin::Sidebar-->
    <section
      class="p-0"
      :class="
        routeName === 'login' || routeName === 'otp'
          ? 'd-none'
          : sidebar
          ? 'col-2'
          : 'col-1'
      "
    >
      <SidebarMenu />
    </section>
    <!-- End::Sidebar-->

    <!-- Begin::Pages -->
    <section class="col p-0">
      <router-view />
    </section>
    <!-- End::Pages -->
  </article>
  <!-- End::Main Layout -->
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

/**
 * @Component
 */
import SidebarMenu from '@/components/Layout/SidebarMenu.vue';

const store = useStore();
const route = useRoute();

const routeName = computed(() => route.name);
const sidebar = computed(() => store.getters['config/getSidebar']);
</script>
