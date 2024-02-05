<template>
    <div id="form">
        <input type="text" name="name" id="name" placeholder="name">
        <input type="email" name="email" id="email" placeholder="email">
        <button>Test</button>
        <h3>{{routerParam}}</h3>
    </div>
</template>

<script>
export default {
    created() {
        console.log('Thiago Martins')
        console.log(this.$route.params.data)
        this.routerParam = this.$route.params.data
    },
    data(){
        return {
            routerParam: 'Empty'
        }
    }
}
</script>

<style>
    #form {
        display: flex;
        flex-direction: column;
    }
</style>