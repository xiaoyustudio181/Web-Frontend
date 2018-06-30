<template>
    <p class="textbox">
        {{data.title}}
        <select v-model="value">
            <option v-for="each in data.options" :value="each.value">{{each.text}}</option>
        </select>
    </p>
</template>

<script>
    export default{
        props:['data'],
        data(){
            return {value:this.data.value};
        }
    }
</script>

<style scoped>

</style>