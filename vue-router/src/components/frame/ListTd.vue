<template>
    <td v-if="transform[headerkey]">
        {{transform[headerkey][row[headerkey]]}}
    </td>
    <td v-else>
        {{row[headerkey]}}
    </td>
</template>

<script>

    export default{
        props:['row','headerkey','transform']
    }
</script>

<style scoped>
    td{padding: 0 20px;text-align: center;}
</style>