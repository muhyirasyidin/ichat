<template>
  <article class="chatbox__detail">
    <!-- Begin::Header -->
    <DetailHeader />
    <!-- End::Header -->

    <!-- Begin::Info -->
    <DetailInfo />
    <!-- End::Info -->

    <!-- Begin::Details -->
    <DetailDetails />
    <!-- End::Details -->
  </article>
</template>

<script lang="ts" setup>
/**
 * @Components
 */
import DetailHeader from '@/components/Chatbox/Detail/DetailHeader.vue';
import DetailInfo from '@/components/Chatbox/Detail/DetailInfo.vue';
import DetailDetails from '@/components/Chatbox/Detail/DetailDetails.vue';
</script>
