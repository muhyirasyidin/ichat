<template>
  <div class="chatbox__footer d-flex justify-content-between">
    <!-- Begin::Text -->
    <textarea placeholder="Type message..." ref="textarea" rows="1"></textarea>
    <!-- Begin::Text -->

    <!-- Begin::Action -->
    <div class="chatbox__footer__action d-flex align-items-end">
      <font-awesome-icon :icon="['fas', 'paperclip']" />
      <font-awesome-icon :icon="['fas', 'paper-plane']" />
    </div>
    <!-- End::Action -->
  </div>
</template>
