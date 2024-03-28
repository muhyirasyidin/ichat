<template>
  <div class="my-2">
    <!-- Begin::Tanggal Badge -->
    <div v-if="item?.tanggal" style="position: relative">
      <hr />

      <div class="chatbox__body__container">
        <span class="chatbox__body__badge">{{ item?.tanggal }}</span>
      </div>
    </div>
    <!-- End::Tanggal Badge -->

    <!-- Begin::Unread Status -->
    <div v-if="item?.unread" class="chatbox__body__unread">
      <p class="m-0">Unread messages</p>
    </div>
    <!-- End::Unread Status -->

    <!-- Begin::Client -->
    <div v-if="item?.client" class="chatbox__body__client d-flex">
      <!-- Begin::Profile Client -->
      <img
        src="https://s3-alpha-sig.figma.com/img/0160/7cd9/fe82c40bc21bec2661fdd176768a408a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJvG~Eea-dl~pyzcrBC85rrceTZxxmp2FaB8eV7h~cPhSj8-4E9J4mYaP2PO7pAj0KgeZvlHxnhJoj6xJE2MM8FOMD8HtsPjd8gr6Wfu6XpC4rh03QfcptXANFmV~RLI7vGXTs~GBgkk6Y-onWS87Jw~nMpojkPzs6r0ODXI~i5CSMbzIGBVkPdyGdKR--U5g3tI8KHt9~js3fbApEqfZXQ5AE9WCSQur2neFrLvfjMnlh1NEK19Gw015NqJmEu55xIBgK~mHi54l~Cfxf~08g6qUumdBBb7-Yd558w96IJkq0~169~-Dx3quHD7iBjHaN3MGk3uuN3277Fi5kTnSA__"
        alt="Profile Client"
        width="40"
        height="40"
        :class="`cc-${item?.status}`"
      />
      <!-- End::Profile Client -->

      <!-- Begin::Bubble -->
      <div class="chatbox__body__client__bubble">
        <!-- Begin::Bubble Name -->
        <p class="chatbox__body__client__bubble-name m-0">{{ item?.name }}</p>
        <!-- End::Bubble Name -->

        <!-- Begin::Bubble Text -->
        <p class="my-2">
          {{ item?.content }}
        </p>
        <!-- End::Bubble Text -->

        <!-- Begin::Bubble Channel -->
        <p
          class="chatbox__body__client__bubble-sosmed d-flex justify-content-between m-0"
        >
          <span class="m-0">
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
          </span>

          <span>{{ item?.time }}</span>
        </p>
        <!-- End::Bubble Channel -->
      </div>
      <!-- End::Bubble -->
    </div>
    <!-- End::Client -->
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
