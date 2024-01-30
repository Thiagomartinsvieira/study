<template>
    <div :class="{ 'client': !isPremium, 'client-premium': isPremium }">
        <h4>Name: {{ client.name }}</h4>
        <hr>
        <p>Email: {{ client.email }}</p>
        <p v-if="!showAge">Age: {{ client.age }}</p>
        <p v-else>The user has hidden their age.</p>
        <button @click="changeColor">Change color!</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { props } = defineProps(['client', 'showAge']);

let isPremium = false;

const changeColor = ($event) => {
    console.log($event)
    isPremium = !isPremium;
}
</script>

<style scoped>
.client, .client-premium {
    max-width: 700px;
    height: 200px;
    padding: 1%;
    margin-top: 4%;
}

.client {
    background-color: #ece5e3;
}

.client-premium {
    background-color: black;
    color: yellow;
}
</style>
