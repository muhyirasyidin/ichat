<template>
  <div
    class="contact__list-item d-flex align-items-center justify-content-between"
    @click="$emit('selectContact', item)"
  >
    <div class="d-flex justify-content-start">
      <!-- Begin::Profile -->
      <div class="contact__list-item__profile">
        <img
          :src="item?.img"
          alt="Profile Chat"
          width="40"
          height="40"
          :class="`cc-${item?.status}`"
        />
        <font-awesome-icon :icon="['fas', 'medal']" />
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

        <!-- Begin::Info Channel -->
        <p class="contact__list-item__info-sosmed m-0">
          <font-awesome-icon
            v-if="item?.sosmed === 'ig'"
            class="instagram"
            :icon="['fab', 'instagram']"
          />
          <font-awesome-icon
            v-else-if="item?.sosmed === 'telegram'"
            class="telegram"
            :icon="['fab', 'telegram']"
          />
          <font-awesome-icon
            v-else-if="item?.sosmed === 'whatsapp'"
            class="whatsapp"
            :icon="['fab', 'whatsapp']"
          />
          <font-awesome-icon
            v-else-if="item?.sosmed === 'email'"
            class="email"
            :icon="['fa', 'envelope']"
          />
          <span>{{ item?.username }}</span>
        </p>
        <!-- End::Info Channel -->
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
