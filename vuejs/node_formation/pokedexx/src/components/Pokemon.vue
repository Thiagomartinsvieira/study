<template>
  <div>
    <h1>{{ formattedName }}</h1>
    <small>{{ url }}</small>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  num: Number,
  name: String,
  url: String
});

const formattedName = formatName(props.name);

function formatName(name) {
  return name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
}
</script>

<style>

</style>
