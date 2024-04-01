<template>
  <div class="sidebar__menu">
    <!-- Begin::Menu Item -->
    <div
      class="d-flex align-items-center sidebar__menu--item"
      v-for="(menu, index) in menus"
      :key="index"
      :class="
        sidebar
          ? menu.active
            ? 'active'
            : ''
          : menu.active
          ? 'active sidebar__menu--item--inactive'
          : 'sidebar__menu--item--inactive'
      "
    >
      <!-- Begin::Icon -->
      <font-awesome-icon
        :icon="['fa', menu.icon]"
        :class="!sidebar ? 'inactive' : ''"
      />
      <!-- Begin::Icon -->

      <!-- Begin::Menu Name -->
      <p v-if="sidebar">{{ menu.text }}</p>
      <!-- End::Menu Name -->
    </div>
    <!-- End::Menu Item -->
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const sidebar = computed(() => store.getters['config/getSidebar']);

const menus = ref([
  {
    icon: 'message',
    text: 'Chat',
    active: true,
  },
  {
    icon: 'address-book',
    text: 'Contacts',
    active: false,
  },
  {
    icon: 'gear',
    text: 'Setting',
    active: false,
  },
]);
</script>
