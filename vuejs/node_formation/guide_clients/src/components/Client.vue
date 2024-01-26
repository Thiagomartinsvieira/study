<template>
    <div id="client">
        <h4>Name: {{ name }}</h4>
        <hr>
        <p>Email: {{ email }}</p>
        <p>Age: {{ age }}</p>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        email: String,
        age: Number,
        client: Object
    }
}
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
 