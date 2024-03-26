<template>
  <div class="sidebar__setting">
    <!-- Begin::Setting Item -->
    <div
      class="sidebar__setting--item d-flex align-items-center"
      :class="!sidebar ? 'justify-content-center' : ''"
    >
      <!-- Begin::Profile -->
      <img
        src="https://s3-alpha-sig.figma.com/img/42b2/0ca2/8570218b1c8e88fa02d7543aaa9daf4e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y2nYlg6XnDQ5oWBYX8awFTmysdi0DjQCuCzyQnHA-8dUiJLMiF57iE1UPdgDeuDRNxvalS~HGAIAAVkw1pg10K1WSZPeWZIrtauAXyuSQM7sl1hqMTWtcJZbuJVf7D~Jm8a5osxvafwLSZLZgAcNrnJjlaiRC43sexb5Q14oqpp3KnaqWv4ABz6LO~BEpwSesvs~xfE6ReQe4WSeHUoTjvn0hu4NDbxaZ~Ixg1~kmn8~gZsIiKEadadJe3FHAT3bZNYGENS3HQVf01gLkfxy9gsPs7W4HtXzFrEIC~fIgKpK2Ya0hhXfKZ45axkf1c0yZVaQreAYdzir-1bUPxPAKw__"
        alt="Profile"
        height="30"
        width="30"
      />
      <!-- End::Profile -->

      <!-- Begin::Info -->
      <div v-if="sidebar" class="sidebar__setting--item__info">
        <p class="m-0">Marvin McKinney</p>
        <p class="m-0">+628791011223452</p>
      </div>
      <!-- Begin::Info -->
    </div>
    <!-- End::Setting Item -->
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const sidebar = computed(() => store.getters['config/getSidebar']);
</script>
