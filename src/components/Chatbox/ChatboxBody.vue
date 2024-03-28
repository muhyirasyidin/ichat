<template>
  <div class="chatbox__body">
    <!-- Begin::CC Group -->
    <ChatboxConversationCC
      v-for="(item, index) in datas"
      :key="index"
      :item="item"
    />
    <!-- End::CC Group -->

    <!-- Begin::Individu -->
    <!-- <ChatboxConversationIndividual /> -->
    <!-- End::Individu -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

/**
 * @Components
 */
import ChatboxConversationCC from '@/components/Chatbox/ChatboxConversationCC.vue';
// import ChatboxConversationIndividual from '@/components/Chatbox/ChatboxConversationIndividual.vue';

const datas = ref([
  {
    tanggal: '21 Maret 2024',
    bubbles: [
      {
        client: true,
        name: 'Abdul Madjid',
        content:
          'Hiking sounds amazing!, I might catch up on some reading and also meet up, with a few friends on Sunday',
        sosmed: 'whatsapp',
        unread: false,
        username: '+6285591991872',
        status: 'takeover',
        time: '10:30',
        total: '(3 Messages)',
        handler: 'Indra Kesuma',
      },
      {
        client: true,
        name: 'Bessie Cooper',
        content: 'Hiking sounds amazing!, I might catch up on some reading',
        unread: true,
        sosmed: 'email',
        username: 'muhyirasyidin0@gmail.com',
        status: 'takeover',
        time: '10:30',
        total: '(12 Messages)',
        handler: 'Astri Susilawati',
      },
      {
        client: true,
        name: 'Arlene McCoy',
        content:
          'Hiking sounds amazing!, I might catch up on some reading and also meet up, with a few friends on Sunday',
        unread: false,
        sosmed: 'ig',
        username: 'muhyirasyidin',
        status: 'takeover',
        time: '10:30',
        total: '(1 Messages)',
        handler: 'Indra Kesuma',
      },
      {
        client: true,
        name: 'Jacob Jones',
        content: 'Hiking sounds amazing!, I might catch up on some reading',
        unread: false,
        sosmed: 'whatsapp',
        username: '+6285591991872',
        status: 'new',
        time: '10:30',
        total: '',
        handler: '',
      },
    ],
  },
  {
    tanggal: 'Today',
    bubbles: [
      {
        client: true,
        name: 'Grace Miller',
        content:
          'Hiking sounds amazing!, I might catch up on some reading and also meet up, with a few friends on Sunday',
        unread: false,
        sosmed: 'whatsapp',
        username: '+6285591991872',
        status: 'done',
        time: '10:30',
        total: '(1000 Messages)',
        handler: 'Chandra Hasibuan',
      },
    ],
  },
]);
</script>
