<template>
  <div
    class="contact__list-item active d-flex align-items-center justify-content-between"
    @click="$emit('selectContact', item)"
  >
    <div class="d-flex justify-content-start">
      <!-- Begin::Profile -->
      <div class="contact__list-item__profile">
        <img src="/icrm.png" alt="Profile Chat" width="40" height="40" />
      </div>
      <!-- End::Profile -->

      <!-- Begin::Info -->
      <div class="contact__list-item__info">
        <!-- Begin::Info Name -->
        <p
          :class="
            item?.unread
              ? 'contact__list-item__info-name--unread'
              : 'contact__list-item__info-name'
          "
          class="m-0"
        >
          {{ item?.name }}
        </p>
        <!-- End::Info Name -->

        <!-- Begin::Info Message -->
        <p class="contact__list-item__info-text m-0">
          {{ item?.message }}
        </p>
        <!-- End::Info Message -->
      </div>
      <!-- End::Info -->
    </div>

    <!-- Begin::Notif -->
    <div class="contact__list-item__notif">
      <p
        :class="item?.unread ? 'contact__list-item__notif--time-unread' : ''"
        class="m-0"
      >
        {{ item?.time }}
      </p>
      <span v-if="item?.notif != '0'" class="badge rounded-pill">{{
        item?.notif
      }}</span>
    </div>
    <!-- End::Notif -->
  </div>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from 'vue';

// Define your props with type annotations
const props = defineProps({
  item: Object,
});

// Use toRefs to create a reactive reference for each prop
const { item } = toRefs(props);
</script>
