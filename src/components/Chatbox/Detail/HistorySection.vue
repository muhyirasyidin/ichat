<template>
  <div class="chatbox__detail__details__content__history">
    <div v-for="(item, index) in datas" :key="index">
      <!-- Begin::Badge -->
      <div v-if="item.date" style="position: relative">
        <hr />

        <div class="chatbox__detail__details__content__history__container">
          <span class="chatbox__detail__details__content__history__badge">{{
            item.date
          }}</span>
        </div>
      </div>
      <!-- End::Badge -->

      <div
        v-for="(history, iHistory) in item.contents"
        :key="iHistory"
        class="chatbox__detail__details__content__history-item d-flex align-items-center"
      >
        <div class="d-flex justify-content-start" style="width: 100%">
          <!-- Begin::Profile -->
          <div class="chatbox__detail__details__content__history-item__profile">
            <img
              src="https://www.shutterstock.com/image-vector/customer-service-icon-user-headphone-600nw-519942469.jpg"
              alt="Profile Chat"
              width="40"
              height="40"
            />
          </div>
          <!-- End::Profile -->

          <!-- Begin::Info -->
          <div
            class="chatbox__detail__details__content__history-item__info"
            style="width: 80%"
          >
            <div class="d-flex justify-content-between">
              <!-- Begin::Info Name -->
              <p
                class="m-0 chatbox__detail__details__content__history-item__info-name"
              >
                {{ history?.name }}
              </p>
              <!-- End::Info Name -->

              <!-- Begin::Time -->
              <p
                class="m-0 chatbox__detail__details__content__history-item__info-time"
              >
                {{ history?.time }}
              </p>
              <!-- End::Time -->
            </div>

            <!-- Begin::Info Message -->
            <p
              class="chatbox__detail__details__content__history-item__info-text m-0"
            >
              {{ history?.message }}
            </p>
            <!-- End::Info Message -->

            <!-- Begin::Info Channel -->
            <p
              class="chatbox__detail__details__content__history-item__info-sosmed m-0"
            >
              <font-awesome-icon
                v-if="history?.sosmed === 'ig'"
                class="instagram"
                :icon="['fab', 'instagram']"
              />
              <font-awesome-icon
                v-else-if="history?.sosmed === 'telegram'"
                class="telegram"
                :icon="['fab', 'telegram']"
              />
              <font-awesome-icon
                v-else-if="history?.sosmed === 'whatsapp'"
                class="whatsapp"
                :icon="['fab', 'whatsapp']"
              />
              <font-awesome-icon
                v-else-if="history?.sosmed === 'email'"
                class="email"
                :icon="['fa', 'envelope']"
              />
              <span>{{ history?.username }}</span>
            </p>
            <!-- End::Info Channel -->
          </div>
          <!-- End::Info -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const datas = [
  {
    date: '',
    contents: [
      {
        name: 'Susi Susilawati',
        message: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        time: '12/03/2024 04:50',
        sosmed: 'whatsapp',
        username: '+6285591991872',
      },
      {
        name: 'Susi Susilawati',
        message: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        time: '12/03/2024 04:50',
        sosmed: 'whatsapp',
        username: '+6285591991872',
      },
    ],
  },
  {
    date: '21 Maret 2024',
    contents: [
      {
        name: 'Susi Susilawati',
        message: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        time: '12/03/2024 04:50',
        sosmed: 'whatsapp',
        username: '+6285591991872',
      },
      {
        name: 'Susi Susilawati',
        message: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        time: '12/03/2024 04:50',
        sosmed: 'whatsapp',
        username: '+6285591991872',
      },
      {
        name: 'Susi Susilawati',
        message: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
        time: '12/03/2024 04:50',
        sosmed: 'whatsapp',
        username: '+6285591991872',
      },
    ],
  },
];
</script>
