<template>
  <!-- Begin::Chat -->
  <article class="row p-0 m-0" style="overflow: hidden; height: 100vh">
    <!-- Begin::Contact List -->
    <section class="col-12 col-md-3 p-0">
      <ContactIndex />
    </section>
    <!-- End::Contact List -->

    <!-- Begin::Chatbox -->
    <section class="col p-0 d-none d-sm-block">
      <ChatboxIndex v-if="open" />
      <ChatboxNotSelected v-else />
    </section>
    <!-- Begin::Chatbox -->

    <!-- Begin::Detail -->
    <section
      class="p-0"
      :class="detail ? 'detail-container active' : 'detail-container'"
    >
      <DetailIndex />
    </section>
    <!-- Begin::Detail -->
  </article>
  <!-- End::Chat -->
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

/**
 * @Components
 */
import ContactIndex from '@/components/Contact/ContactIndex.vue';
import ChatboxNotSelected from '@/components/Chatbox/ChatboxNotSelected.vue';
import ChatboxIndex from '@/components/Chatbox/ChatboxIndex.vue';
import DetailIndex from '@/components/Chatbox/Detail/DetailIndex.vue';

const store = useStore();

const open = computed(() => store.getters['message/getOpen']);
const detail = computed(() => store.getters['message/getDetail']);
</script>
