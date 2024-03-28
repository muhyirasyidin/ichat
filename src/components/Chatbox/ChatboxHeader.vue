<template>
  <div
    class="chatbox__header d-flex justify-content-between align-items-center"
  >
    <!-- Begin::Info -->
    <div class="d-flex align-items-center">
      <!-- Begin::Profile -->
      <img src="/icrm.png" alt="Chatbox Profile" width="40" height="40" />
      <!-- End::Profile -->

      <!-- Begin::Chatbox Name -->
      <p class="m-0">CC Icon Gandul</p>
      <!-- End::Chatbox Name -->

      <!-- Begin::Status -->
      <!-- <span class="badge rounded-pill">Online</span> -->
      <!-- End::Status -->
    </div>
    <!-- End::Info -->

    <!-- Begin::Action -->
    <div>
      <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" />
    </div>
    <!-- End::Action -->
  </div>
</template>

<script lang="ts" setup></script>
