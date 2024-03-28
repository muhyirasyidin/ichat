<template>
  <div class="auth__form d-flex justify-content-center align-items-center">
    <div>
      <!-- Begin::Title -->
      <p>Sign In to</p>
      <!-- End::Title -->

      <!-- Begin::Illustration -->
      <img src="/form-illustration.png" alt="Form Illustration" height="80px" />
      <!-- End::Illustration -->

      <!-- Begin::Form Login -->
      <form @submit.prevent="handleSubmit">
        <p class="m-0">+62</p>

        <!-- Begin::Form Number -->
        <input
          type="text"
          inputmode="numeric"
          class="form-control"
          placeholder="e.g 8599..."
          required
        />
        <!-- End::Form Number -->

        <!-- Begin::Form Button -->
        <button class="btn" v-if="!isLoading">Next</button>
        <button class="btn" disabled v-else>
          <span
            class="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
          <span role="status">Loading...</span>
        </button>
        <!-- End::Form Button -->
      </form>
      <!-- End::Form Login -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const isLoading = ref(false);

const handleSubmit = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    router.push({ path: '/otp' });
  }, 2000);
};
</script>
