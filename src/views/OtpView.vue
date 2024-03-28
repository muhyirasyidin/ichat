<template>
  <article class="otp d-flex justify-content-center align-items-center">
    <section class="otp__container">
      <!-- Begin::Illustration -->
      <img src="/form-illustration.png" alt="Form Illustration" height="80px" />
      <!-- End::Illustration -->

      <!-- Begin::Info Text -->
      <p class="text-center">
        Kami telah mengirimkan kode OTP ke
        <br />
        +6285591991872
      </p>
      <!-- End::Info Text -->

      <!-- Begin::Form -->
      <form class="mt-2" @submit.prevent="handleSubmit">
        <!-- Begin::Form OTP -->
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Masukkan OTP"
            required
          />
        </div>
        <!-- End::Form OTP -->

        <!-- Begin::Form Action -->
        <button v-if="!isLoading" class="btn">Enter</button>
        <button class="btn" disabled v-else>
          <span
            class="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span role="status">Loading...</span>
        </button>
        <!-- Begin::Form Action -->
      </form>
      <!-- End::Form -->
    </section>
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const isLoading = ref(false);

const handleSubmit = () => {
  isLoading.value = true;

  setTimeout(() => {
    store.commit('auth/setAuthentication', true);
    isLoading.value = false;
    router.push({ path: '/' });
  }, 2000);
};
</script>
