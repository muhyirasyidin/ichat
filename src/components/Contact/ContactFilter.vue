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
      <p class="mt-2" data-bs-toggle="dropdown" aria-expanded="false">Semua</p>
      <!-- <font-awesome-icon
        icon="fa-solid fa-filter cursor-pointer"
        class="contact__filter__filter"
      /> -->
      <!-- End::Toggle Filter -->

      <!-- Begin::Dropdown -->
      <ul class="dropdown-menu dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Open</a></li>
        <li><a class="dropdown-item" href="#">Close</a></li>
        <li><a class="dropdown-item" href="#">Progress</a></li>
        <li><a class="dropdown-item" href="#">Done</a></li>
      </ul>
      <!-- End::Dropdown -->
    </form>
    <!-- End::Form -->
  </div>
</template>

<script lang="ts" setup></script>
