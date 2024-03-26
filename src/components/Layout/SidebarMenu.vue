<template>
  <div class="sidebar">
    <!-- Begin::Icon -->
    <img v-if="sidebar" src="/icon.png" alt="Icon" class="sidebar__icon" />
    <img
      v-else
      src="/icon-inactive.png"
      alt="Icon"
      class="sidebar__icon--inactive"
    />
    <!-- End::Icon -->

    <!-- Begin::Menus -->
    <MenuComponent />
    <!-- End::Menus -->

    <!-- Begin::Setting -->
    <SettingComponent />
    <!-- End::Setting -->
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

/**
 * @Components
 */
import MenuComponent from '@/components/Layout/MenuComponent.vue';
import SettingComponent from '@/components/Layout/SettingComponent.vue';

const store = useStore();

const sidebar = computed(() => store.getters['config/getSidebar']);
</script>
