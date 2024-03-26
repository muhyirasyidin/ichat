<template>
  <div class="auth__illustration">
    <div>
      <!-- Begin::Carousel -->
      <Carousel :autoplay="5000" :wrap-around="true">
        <!-- Begin::Slider -->
        <Slide v-for="slide in 2" :key="slide">
          <div class="auth__illustration__carousel carousel__item">
            <!-- Begin::Illustration -->
            <img src="/login-banner.png" alt="Login Banner" width="400px" />
            <!-- End::Illustration -->

            <!-- Begin::Title -->
            <p class="auth__illustration__title text-center">
              Lorem ipsum dolor sit amet
            </p>
            <!-- End::Title -->

            <!-- Begin::Description -->
            <p class="auth__illustration__description text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              quam sed optio unde officiis soluta hic temporibus odit autem?
            </p>
            <!-- End::Description -->
          </div>
        </Slide>
        <!-- End::Slider -->

        <!-- Begin::Pagination -->
        <template #addons>
          <Pagination />
        </template>
        <!-- End::Pagination -->
      </Carousel>
      <!-- End::Carousel -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination } from 'vue3-carousel';
</script>
