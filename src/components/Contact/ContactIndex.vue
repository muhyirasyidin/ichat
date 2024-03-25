<template>
  <article class="contact">
    <!-- Begin::Header -->
    <section>
      <ContactHeader />
    </section>
    <!-- Begin::Header -->

    <!-- Begin::Filter -->
    <section>
      <ContactFilter />
    </section>
    <!-- Begin::Filter -->

    <!-- Begin::List -->
    <section>
      <ContactList />
    </section>
    <!-- Begin::List -->
  </article>
</template>

<script lang="ts" setup>
/**
 * @Component
 */
import ContactHeader from '@/components/Contact/ContactHeader.vue';
import ContactFilter from '@/components/Contact/ContactFilter.vue';
import ContactList from '@/components/Contact/ContactList.vue';
</script>
