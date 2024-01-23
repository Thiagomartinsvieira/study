<template>
    <div id="client">
        <h2>Client {{name}} component here !</h2>
        <p>Client description: {{description}}</p>
    </div>
</template>


<script>
export default {
    data(){
        return {
             name: 'Thiago',
             number: '',
             email: '',
             age: 0,
             description: 'Lorem ipsum lorem Ipsum 1212'
        }
    }
}
</script>
<style scoped>
    #client{
        max-width: 700px;
        height: 100px;
    }

    
</style>