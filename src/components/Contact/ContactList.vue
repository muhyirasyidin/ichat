<template>
  <article class="contact__list">
    <!-- Begin::Item -->
    <div v-if="datas.length > 0">
      <section
        v-for="(item, index) in datas"
        :key="index"
        class="contact__list-item d-flex align-items-center justify-content-between"
      >
        <div class="d-flex justify-content-start">
          <!-- Begin::Profile -->
          <div class="contact__list-item__profile">
            <img :src="item.img" alt="Profile Chat" width="32" height="32" />
          </div>
          <!-- End::Profile -->

          <!-- Begin::Info -->
          <div class="contact__list-item__info">
            <p
              :class="
                item.unread
                  ? 'contact__list-item__info-name--unread'
                  : 'contact__list-item__info-name'
              "
              class="m-0"
            >
              {{ item.name }}
            </p>
            <p class="contact__list-item__info-text m-0">
              {{ item.message }}
            </p>
          </div>
          <!-- End::Info -->
        </div>

        <!-- Begin::Notif -->
        <div class="contact__list-item__notif">
          <p
            :class="item.unread ? 'contact__list-item__notif--time-unread' : ''"
            class="m-0"
          >
            {{ item.time }}
          </p>
          <span v-if="item.notif != '0'" class="badge rounded-pill">{{
            item.notif
          }}</span>
        </div>
        <!-- End::Notif -->
      </section>
    </div>
    <div v-else>
      <p class="contact__list__empty-message">
        You don't have any conversation
      </p>
    </div>
    <!-- End::Item -->
  </article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// const datas = ref([])
const datas = ref([
  {
    name: 'Nurdin M Top',
    message: 'Oboy dash me 2k na',
    img: 'https://s3-alpha-sig.figma.com/img/3fc4/15c0/2073eb1da5931ff123f352bc5f1d85a1?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERIxLP3EZ3anGTcOA2--atDLaSJiU9BYRvYwpDX3y2~ARNYMuFQmkLwRSAJA1TjVbDsDJFIqWig5pr9au145NfI-ZYe8e2exH9Ww7DFmDHA~iPf2faqfkCNDJSwlX1R5s~nCSREyIMdyRTjwPoFu17kTqWX8IdkfG47KgDvX8lrv-5xDMmA4iIjJoOxGPQBSiqHCqztdpG0d3fdGDp0sHa17exepMtAgdZUNKIiZ89dPWi7G9DtAspV0YGXAZ-qVDY6vNlVPpDpV75yCVe4aMFKlKIRDgIveoc4qHMrFvcqJk1M3iteG6Jy3g4LLZQxGUkbeVEN2Roe0bjjBZeYNcg__',
    time: '3:11 pm',
    notif: '1',
    unread: true,
  },
  {
    name: 'Marvin McKinney',
    message: 'Gimana Bro, udah beres?',
    img: 'https://s3-alpha-sig.figma.com/img/0d6e/4ed2/fb4c940c0cded68c770d7f0c61c5c7a0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DB0mtcw6iDzi1ENgp0YH3yGb4mstkpzU7WOK3lA7UFL8X8rTtDyhA0srb-xOWdvHyS0w46bh095JKAGQ7Z567~NnK8eWsjM3644XkXHX7oAsZPwZ9M9WXoBHEM5CLMKkDPAPKVfXe59KvRFb2NMyQnUt14P3SE5JqHlrY0ETD0jeHSPlmdRz1pAFyXBK5ympMWCftenrCUfCkvy2gUEErd7MNtb0EHAPdrmG4VEgdm2pT3WxYviXwSTCHyqKaVTRmeh4PjHG5jXSJrrcjg5joshlLHa2ToYIku0pPmw6oe~jQmMSM9YowJPVeI-eaqDA~LIuHOHzqH9w~-PU~JniWg__',
    time: '12:35 pm',
    notif: '0',
    unread: false,
  },
  {
    name: 'Cody Fisher',
    message: "Hello sir, i've sent you the link",
    img: 'https://s3-alpha-sig.figma.com/img/f5ea/9148/e40d1c93c3c447aa4f6993b92a86c0b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZfL~YfTJ5MA4LNeII2aGEWWwfdsglIyR9DeDTW42AoKmpywpiehN0rPfaDT7Ev1KX5EsJYXEBKavIwDFkz4CD0eWRCfiITO~cb4bFwISBbQcHKHP0LFKwBkr1WcRTdyiHPvJ7TlnP3gbCe1ZkH1MIpdNCTIC9VfRj99T6iOR-2AIItsGlAx97Wp2kcohuWxyv5ntxDI3OyNCty8mEZZVoOvN74kXMmDQBlPzOgkIbUSuwA7aZmaRSQIeTfWpkjHcX4i7~9~N0iSw0SIIdPrhKwNK7Ppz8fnBgB8lcNnueOCAjWpetQ7pquQLLUbb6Eoo9Q8ExC4XD0l8sKgwjYOPQ__',
    time: 'Tuesday',
    notif: '0',
    unread: false,
  },
  {
    name: 'Keluarga Cemara',
    message: 'Lisa Anderson: Hei kapan mau kumpul acara buka..',
    img: 'https://s3-alpha-sig.figma.com/img/0160/7cd9/fe82c40bc21bec2661fdd176768a408a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJvG~Eea-dl~pyzcrBC85rrceTZxxmp2FaB8eV7h~cPhSj8-4E9J4mYaP2PO7pAj0KgeZvlHxnhJoj6xJE2MM8FOMD8HtsPjd8gr6Wfu6XpC4rh03QfcptXANFmV~RLI7vGXTs~GBgkk6Y-onWS87Jw~nMpojkPzs6r0ODXI~i5CSMbzIGBVkPdyGdKR--U5g3tI8KHt9~js3fbApEqfZXQ5AE9WCSQur2neFrLvfjMnlh1NEK19Gw015NqJmEu55xIBgK~mHi54l~Cfxf~08g6qUumdBBb7-Yd558w96IJkq0~169~-Dx3quHD7iBjHaN3MGk3uuN3277Fi5kTnSA__',
    time: '3/12/2024',
    notif: '351',
    unread: true,
  },
  {
    name: 'Cameron Williamson',
    message: "Hello sir, i've sent you the link",
    img: 'https://s3-alpha-sig.figma.com/img/c666/5347/4c8c58ca88650363e7fb08ee0c19d728?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCxg-zANm2fXVUfvyAujAVYm1A4odI8nJ3GHr0o6dOTDD2tSfmpAbAvWth5bvBqjVtn1nftmAGhd4z245hi-l4wpOIsZ5byAfGvlLkjjfKX-r1JNxqKfZ8ts99VmYlD15cL30dm7ua5PstY2LBMRA2ttojSITBJ6Z-URQORJbtImQglvtuGLndXPU7DAM5sPIWFEbg~KG2VXu0RJFsibVTyajHp0o6wESyFmdFhVkQkh7gzrBCMrrxXept1xD3JTL8q8IH-CWDsSesDyHvA~AnEExD~TiokEp14N65OotLkXGb-4MjVwwMS5xt-KLlkdQ~Tzt5s7iUL~q6qga6kQMw__',
    time: '1/2/2024',
    notif: '0',
    unread: false,
  },
  {
    name: 'Nurdin M Top',
    message: 'Oboy dash me 2k na',
    img: 'https://s3-alpha-sig.figma.com/img/3fc4/15c0/2073eb1da5931ff123f352bc5f1d85a1?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERIxLP3EZ3anGTcOA2--atDLaSJiU9BYRvYwpDX3y2~ARNYMuFQmkLwRSAJA1TjVbDsDJFIqWig5pr9au145NfI-ZYe8e2exH9Ww7DFmDHA~iPf2faqfkCNDJSwlX1R5s~nCSREyIMdyRTjwPoFu17kTqWX8IdkfG47KgDvX8lrv-5xDMmA4iIjJoOxGPQBSiqHCqztdpG0d3fdGDp0sHa17exepMtAgdZUNKIiZ89dPWi7G9DtAspV0YGXAZ-qVDY6vNlVPpDpV75yCVe4aMFKlKIRDgIveoc4qHMrFvcqJk1M3iteG6Jy3g4LLZQxGUkbeVEN2Roe0bjjBZeYNcg__',
    time: '3:11 pm',
    notif: '1',
    unread: true,
  },
  {
    name: 'Marvin McKinney',
    message: 'Gimana Bro, udah beres?',
    img: 'https://s3-alpha-sig.figma.com/img/0d6e/4ed2/fb4c940c0cded68c770d7f0c61c5c7a0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DB0mtcw6iDzi1ENgp0YH3yGb4mstkpzU7WOK3lA7UFL8X8rTtDyhA0srb-xOWdvHyS0w46bh095JKAGQ7Z567~NnK8eWsjM3644XkXHX7oAsZPwZ9M9WXoBHEM5CLMKkDPAPKVfXe59KvRFb2NMyQnUt14P3SE5JqHlrY0ETD0jeHSPlmdRz1pAFyXBK5ympMWCftenrCUfCkvy2gUEErd7MNtb0EHAPdrmG4VEgdm2pT3WxYviXwSTCHyqKaVTRmeh4PjHG5jXSJrrcjg5joshlLHa2ToYIku0pPmw6oe~jQmMSM9YowJPVeI-eaqDA~LIuHOHzqH9w~-PU~JniWg__',
    time: '12:35 pm',
    notif: '0',
    unread: false,
  },
  {
    name: 'Cody Fisher',
    message: "Hello sir, i've sent you the link",
    img: 'https://s3-alpha-sig.figma.com/img/f5ea/9148/e40d1c93c3c447aa4f6993b92a86c0b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZfL~YfTJ5MA4LNeII2aGEWWwfdsglIyR9DeDTW42AoKmpywpiehN0rPfaDT7Ev1KX5EsJYXEBKavIwDFkz4CD0eWRCfiITO~cb4bFwISBbQcHKHP0LFKwBkr1WcRTdyiHPvJ7TlnP3gbCe1ZkH1MIpdNCTIC9VfRj99T6iOR-2AIItsGlAx97Wp2kcohuWxyv5ntxDI3OyNCty8mEZZVoOvN74kXMmDQBlPzOgkIbUSuwA7aZmaRSQIeTfWpkjHcX4i7~9~N0iSw0SIIdPrhKwNK7Ppz8fnBgB8lcNnueOCAjWpetQ7pquQLLUbb6Eoo9Q8ExC4XD0l8sKgwjYOPQ__',
    time: 'Tuesday',
    notif: '0',
    unread: false,
  },
  {
    name: 'Keluarga Cemara',
    message: 'Lisa Anderson: Hei kapan mau kumpul acara buka..',
    img: 'https://s3-alpha-sig.figma.com/img/0160/7cd9/fe82c40bc21bec2661fdd176768a408a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJvG~Eea-dl~pyzcrBC85rrceTZxxmp2FaB8eV7h~cPhSj8-4E9J4mYaP2PO7pAj0KgeZvlHxnhJoj6xJE2MM8FOMD8HtsPjd8gr6Wfu6XpC4rh03QfcptXANFmV~RLI7vGXTs~GBgkk6Y-onWS87Jw~nMpojkPzs6r0ODXI~i5CSMbzIGBVkPdyGdKR--U5g3tI8KHt9~js3fbApEqfZXQ5AE9WCSQur2neFrLvfjMnlh1NEK19Gw015NqJmEu55xIBgK~mHi54l~Cfxf~08g6qUumdBBb7-Yd558w96IJkq0~169~-Dx3quHD7iBjHaN3MGk3uuN3277Fi5kTnSA__',
    time: '3/12/2024',
    notif: '351',
    unread: true,
  },
  {
    name: 'Cameron Williamson',
    message: "Hello sir, i've sent you the link",
    img: 'https://s3-alpha-sig.figma.com/img/c666/5347/4c8c58ca88650363e7fb08ee0c19d728?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCxg-zANm2fXVUfvyAujAVYm1A4odI8nJ3GHr0o6dOTDD2tSfmpAbAvWth5bvBqjVtn1nftmAGhd4z245hi-l4wpOIsZ5byAfGvlLkjjfKX-r1JNxqKfZ8ts99VmYlD15cL30dm7ua5PstY2LBMRA2ttojSITBJ6Z-URQORJbtImQglvtuGLndXPU7DAM5sPIWFEbg~KG2VXu0RJFsibVTyajHp0o6wESyFmdFhVkQkh7gzrBCMrrxXept1xD3JTL8q8IH-CWDsSesDyHvA~AnEExD~TiokEp14N65OotLkXGb-4MjVwwMS5xt-KLlkdQ~Tzt5s7iUL~q6qga6kQMw__',
    time: '1/2/2024',
    notif: '0',
    unread: false,
  },
  {
    name: 'Nurdin M Top',
    message: 'Oboy dash me 2k na',
    img: 'https://s3-alpha-sig.figma.com/img/3fc4/15c0/2073eb1da5931ff123f352bc5f1d85a1?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ERIxLP3EZ3anGTcOA2--atDLaSJiU9BYRvYwpDX3y2~ARNYMuFQmkLwRSAJA1TjVbDsDJFIqWig5pr9au145NfI-ZYe8e2exH9Ww7DFmDHA~iPf2faqfkCNDJSwlX1R5s~nCSREyIMdyRTjwPoFu17kTqWX8IdkfG47KgDvX8lrv-5xDMmA4iIjJoOxGPQBSiqHCqztdpG0d3fdGDp0sHa17exepMtAgdZUNKIiZ89dPWi7G9DtAspV0YGXAZ-qVDY6vNlVPpDpV75yCVe4aMFKlKIRDgIveoc4qHMrFvcqJk1M3iteG6Jy3g4LLZQxGUkbeVEN2Roe0bjjBZeYNcg__',
    time: '3:11 pm',
    notif: '1',
    unread: true,
  },
  {
    name: 'Marvin McKinney',
    message: 'Gimana Bro, udah beres?',
    img: 'https://s3-alpha-sig.figma.com/img/0d6e/4ed2/fb4c940c0cded68c770d7f0c61c5c7a0?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DB0mtcw6iDzi1ENgp0YH3yGb4mstkpzU7WOK3lA7UFL8X8rTtDyhA0srb-xOWdvHyS0w46bh095JKAGQ7Z567~NnK8eWsjM3644XkXHX7oAsZPwZ9M9WXoBHEM5CLMKkDPAPKVfXe59KvRFb2NMyQnUt14P3SE5JqHlrY0ETD0jeHSPlmdRz1pAFyXBK5ympMWCftenrCUfCkvy2gUEErd7MNtb0EHAPdrmG4VEgdm2pT3WxYviXwSTCHyqKaVTRmeh4PjHG5jXSJrrcjg5joshlLHa2ToYIku0pPmw6oe~jQmMSM9YowJPVeI-eaqDA~LIuHOHzqH9w~-PU~JniWg__',
    time: '12:35 pm',
    notif: '0',
    unread: false,
  },
  {
    name: 'Cody Fisher',
    message: "Hello sir, i've sent you the link",
    img: 'https://s3-alpha-sig.figma.com/img/f5ea/9148/e40d1c93c3c447aa4f6993b92a86c0b6?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZZfL~YfTJ5MA4LNeII2aGEWWwfdsglIyR9DeDTW42AoKmpywpiehN0rPfaDT7Ev1KX5EsJYXEBKavIwDFkz4CD0eWRCfiITO~cb4bFwISBbQcHKHP0LFKwBkr1WcRTdyiHPvJ7TlnP3gbCe1ZkH1MIpdNCTIC9VfRj99T6iOR-2AIItsGlAx97Wp2kcohuWxyv5ntxDI3OyNCty8mEZZVoOvN74kXMmDQBlPzOgkIbUSuwA7aZmaRSQIeTfWpkjHcX4i7~9~N0iSw0SIIdPrhKwNK7Ppz8fnBgB8lcNnueOCAjWpetQ7pquQLLUbb6Eoo9Q8ExC4XD0l8sKgwjYOPQ__',
    time: 'Tuesday',
    notif: '0',
    unread: false,
  },
  {
    name: 'Keluarga Cemara',
    message: 'Lisa Anderson: Hei kapan mau kumpul acara buka..',
    img: 'https://s3-alpha-sig.figma.com/img/0160/7cd9/fe82c40bc21bec2661fdd176768a408a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJvG~Eea-dl~pyzcrBC85rrceTZxxmp2FaB8eV7h~cPhSj8-4E9J4mYaP2PO7pAj0KgeZvlHxnhJoj6xJE2MM8FOMD8HtsPjd8gr6Wfu6XpC4rh03QfcptXANFmV~RLI7vGXTs~GBgkk6Y-onWS87Jw~nMpojkPzs6r0ODXI~i5CSMbzIGBVkPdyGdKR--U5g3tI8KHt9~js3fbApEqfZXQ5AE9WCSQur2neFrLvfjMnlh1NEK19Gw015NqJmEu55xIBgK~mHi54l~Cfxf~08g6qUumdBBb7-Yd558w96IJkq0~169~-Dx3quHD7iBjHaN3MGk3uuN3277Fi5kTnSA__',
    time: '3/12/2024',
    notif: '351',
    unread: true,
  },
  {
    name: 'Cameron Williamson',
    message: "Hello sir, i've sent you the link",
    img: 'https://s3-alpha-sig.figma.com/img/c666/5347/4c8c58ca88650363e7fb08ee0c19d728?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCxg-zANm2fXVUfvyAujAVYm1A4odI8nJ3GHr0o6dOTDD2tSfmpAbAvWth5bvBqjVtn1nftmAGhd4z245hi-l4wpOIsZ5byAfGvlLkjjfKX-r1JNxqKfZ8ts99VmYlD15cL30dm7ua5PstY2LBMRA2ttojSITBJ6Z-URQORJbtImQglvtuGLndXPU7DAM5sPIWFEbg~KG2VXu0RJFsibVTyajHp0o6wESyFmdFhVkQkh7gzrBCMrrxXept1xD3JTL8q8IH-CWDsSesDyHvA~AnEExD~TiokEp14N65OotLkXGb-4MjVwwMS5xt-KLlkdQ~Tzt5s7iUL~q6qga6kQMw__',
    time: '1/2/2024',
    notif: '0',
    unread: false,
  },
]);
</script>
