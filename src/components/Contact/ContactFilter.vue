<template>
  <div class="contact__filter">
    <!-- Begin::Form -->
    <form>
      <!-- Begin::Label -->
      <label for="search">
        <font-awesome-icon
          icon="fa-solid fa-magnifying-glass"
          class="contact__filter__icon"
        />
      </label>
      <!-- End::Label -->

      <!-- Begin::Search -->
      <input
        id="search"
        type="text"
        class="form-control"
        placeholder="Search or start new chat"
      />
      <!-- End::Search -->

      <!-- Begin::Toggle Filter -->
      <font-awesome-icon
        icon="fa-solid fa-filter cursor-pointer"
        class="contact__filter__filter"
      />
      <!-- End::Toggle Filter -->
    </form>
    <!-- End::Form -->
  </div>
</template>

<script lang="ts" setup></script>
