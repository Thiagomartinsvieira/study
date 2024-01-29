<template>
    <div id="client">
        <h4>Name: {{ client.name }}</h4>
        <hr>
        <p>Email: {{ client.email }}</p>
        <p v-if="showAge === false">Age: {{ client.age }}</p>
        <p v-else>The user hide age</p>
    </div>
</template>

<script setup>
const {props} = defineProps(['client', 'showAge'])
</script>

<style scoped>
#client {
    background-color: #ece5e3;
    max-width: 700px;
    height: 200px;
    padding: 1%;
    margin-top: 4%;
}
</style>
 