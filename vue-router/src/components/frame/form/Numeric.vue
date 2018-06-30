<template>
    <p class="numeric">
        {{data.title}} <input type="number" v-model="value" />
    </p>
</template>

<script>
    export default{
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