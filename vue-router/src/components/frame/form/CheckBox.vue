<template>
    <p class="check">
        {{data.title}}
        <label v-for="each in data.options">
            <input :value="each.value" v-model="value" type="checkbox" />
            {{each.text}}
        </label>
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