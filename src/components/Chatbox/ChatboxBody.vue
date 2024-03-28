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
    client: true,
    name: 'Abdul Madjid',
    content:
      'Hiking sounds amazing!, I might catch up on some reading and also meet up, with a few friends on Sunday',
    unread: false,
    sosmed: 'whatsapp',
    username: '+6285591991872',
    status: 'takeover',
    time: '10:30',
  },
  {
    tanggal: '',
    client: true,
    name: 'Abdul Madjid',
    content:
      'Hiking sounds amazing!, I might catch up on some reading and also meet up, with a few friends on Sunday',
    unread: false,
    sosmed: 'whatsapp',
    username: '+6285591991872',
    status: 'takeover',
    time: '10:30',
  },
  {
    tanggal: '',
    client: true,
    name: 'Bessie Cooper',
    content: 'Hiking sounds amazing!, I might catch up on some reading',
    unread: true,
    sosmed: 'email',
    username: 'muhyirasyidin0@gmail.com',
    status: 'takeover',
    time: '10:30',
  },
  {
    tanggal: '',
    client: true,
    name: 'Arlene McCoy',
    content:
      'Hiking sounds amazing!, I might catch up on some reading and also meet up, with a few friends on Sunday',
    unread: false,
    sosmed: 'instagram',
    username: 'muhyirasyidin',
    status: 'takeover',
    time: '10:30',
  },
  {
    tanggal: '',
    client: true,
    name: 'Jacob Jones',
    content: 'Hiking sounds amazing!, I might catch up on some reading',
    unread: false,
    sosmed: 'whatsapp',
    username: '+6285591991872',
    status: 'new',
    time: '10:30',
  },
  {
    tanggal: 'Today',
    client: true,
    name: 'Grace Miller',
    content:
      'Hiking sounds amazing!, I might catch up on some reading and also meet up, with a few friends on Sunday',
    unread: false,
    sosmed: 'whatsapp',
    username: '+6285591991872',
    status: 'done',
    time: '10:30',
  },
]);
</script>
