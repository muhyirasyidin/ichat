<template>
  <article class="auth row m-0 p-0">
    <!-- Begin::Illustration -->
    <section class="col-7 p-0 d-none d-lg-block">
      <AuthIllustration />
    </section>
    <!-- End::Illustration -->

    <!-- Begin::Form -->
    <section class="col p-0">
      <AuthForm />
    </section>
    <!-- End::Form -->
  </article>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

/**
 * @Components
 */
import AuthIllustration from '@/components/Auth/AuthIllustration.vue';
import AuthForm from '@/components/Auth/AuthForm.vue';

const store = useStore();
const router = useRouter();

onBeforeMount(() => {
  if (store.getters['auth/getAuthenticated']) {
    router.push({ path: '/' });
  }
});
</script>
