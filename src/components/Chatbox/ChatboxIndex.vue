<template>
  <article class="chatbox">
    <!-- Begin::Chatbox Header -->
    <section>
      <ChatboxHeader />
    </section>
    <!-- End::Chatbox Header -->

    <!-- Begin::Conversation -->
    <section>
      <ChatboxBody />
    </section>
    <!-- End::Conversation -->

    <!-- Begin::Chatbox Footer -->
    <section>
      <ChatboxFooter />
    </section>
    <!-- End::Chatbox Footer -->
  </article>
</template>

<script lang="ts" setup>
/**
 * @Components
 */
import ChatboxHeader from '@/components/Chatbox/ChatboxHeader.vue';
import ChatboxBody from '@/components/Chatbox/ChatboxBody.vue';
import ChatboxFooter from '@/components/Chatbox/ChatboxFooter.vue';
</script>
