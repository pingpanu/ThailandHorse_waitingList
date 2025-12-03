<script setup>
  import HeaderItem from './components/header.vue';
  import { useLanguage } from './composable/useLangauge';

  const { currentLanguage } = useLanguage();
  console.log('Initial langauge, on start: ', currentLanguage.value);
</script>

<template>
  <HeaderItem />
</template>

<style></style>
