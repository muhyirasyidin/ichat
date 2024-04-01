<template>
  <ul class="px-3">
    <!-- Begin::Details Content -->
    <li
      v-for="(item, index) in datas"
      :key="index"
      class="d-flex align-items-center"
    >
      <!-- Begin::Icon -->
      <font-awesome-icon :icon="[item.brand, item.icon]" />
      <!-- End::Icon -->

      <!-- Begin::Username -->
      <p class="m-0">{{ item.username }}</p>
      <!-- End::Username -->
    </li>
    <!-- End::Details Content -->
  </ul>
</template>

<script lang="ts" setup>
const datas = [
  {
    icon: 'phone',
    brand: 'fas',
    username: '+6285591991872',
  },
  {
    icon: 'envelope',
    brand: 'fas',
    username: 'muhyirasyidin0@gmail.com',
  },
  {
    icon: 'instagram',
    brand: 'fab',
    username: 'muhyirasyidin',
  },
  {
    icon: 'location-dot',
    brand: 'fas',
    username:
      'MQ5Q+2C6, Jalan Raya PLN EHP, Gandul, Kec. Cinere, Kota Depok, Jawa Barat 16514',
  },
];
</script>
