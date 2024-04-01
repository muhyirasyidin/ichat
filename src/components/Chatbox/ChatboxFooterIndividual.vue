<template>
  <div class="container">
    <div class="chatbox__footer d-flex justify-content-between">
      <!-- Begin::Text -->
      <textarea
        placeholder="Type message..."
        ref="textarea"
        rows="1"
        @input="handleTyping"
      ></textarea>
      <!-- Begin::Text -->

      <!-- Begin::Action -->
      <div class="chatbox__footer__action d-flex align-items-end">
        <font-awesome-icon :icon="['fas', 'paperclip']" />
        <font-awesome-icon :icon="['fas', 'paper-plane']" />
      </div>
      <!-- End::Action -->
    </div>
  </div>
</template>

<script lang="ts" setup>
/**
 * @WS
 */
import { socket } from '@/config/ws';

const handleTyping = (e: any) => {
  socket.emit('typing', e.target.value);
};
</script>
