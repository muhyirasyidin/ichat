<template>
  <!-- Begin::Chat -->
  <article class="row p-0 m-0">
    <!-- Begin::Contact List -->
    <section class="col-12 col-md-4 p-0">
      <ContactIndex />
    </section>
    <!-- End::Contact List -->

    <!-- Begin::Chatbox -->
    <section class="col p-0 d-none d-sm-block">
      <ChatboxIndex v-if="open" />
      <ChatboxNotSelected v-else />
    </section>
    <!-- Begin::Chatbox -->
  </article>
  <!-- End::Chat -->
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

/**
 * @Component
 */
import ContactIndex from '@/components/Contact/ContactIndex.vue';
import ChatboxNotSelected from '@/components/Chatbox/ChatboxNotSelected.vue';
import ChatboxIndex from '@/components/Chatbox/ChatboxIndex.vue';

const store = useStore();

const open = computed(() => store.getters['message/getOpen']);
</script>
