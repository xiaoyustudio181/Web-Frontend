<template>
    <p class="textbox">
        {{data.title}} <input type="text" v-model="value" :placeholder="data.placeholder" />
    </p>
</template>

<script>
    export default{
        name:'txt',
        props:['data'],
        data(){
            return {
                value:this.data.value
            };
        }
    }
</script>

<style scoped>

</style>