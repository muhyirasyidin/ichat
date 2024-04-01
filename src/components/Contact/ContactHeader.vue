<template>
  <div
    class="contact__header m-0 p-0 d-flex align-items-center"
    style="width: 100%"
  >
    <!-- Begin::Toggle Sidebar -->
    <font-awesome-icon :icon="['fa', 'bars']" @click="handleToggleSidebar" />
    <!-- End::Toggle Sidebar -->

    <!-- Begin::Header -->
    <div
      class="d-flex justify-content-between align-items-center"
      style="width: 85%"
    >
      <p class="mt-3">Chat</p>

      <!-- Begin::Toggle -->
      <font-awesome-icon
        :icon="['fas', 'ellipsis-vertical']"
        class="dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      />
      <!-- End::Toggle -->

      <!-- Begin::Dropdown -->
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Create Group</a></li>
        <li>
          <a class="dropdown-item" href="#" @click="handleLogout">Logout</a>
        </li>
      </ul>
      <!-- End::Dropdown -->
    </div>
    <!-- Begin::Header -->
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const handleToggleSidebar = () => {
  store.commit('config/setSidebar', !store.getters['config/getSidebar']);
};

const handleLogout = () => {
  store.commit('auth/setAuthentication', false);
  router.push({ path: '/login' });
};
</script>
