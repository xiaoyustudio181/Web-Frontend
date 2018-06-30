<template>
    <tr>
        <ListTd :key="key" v-for="(header,key) in struct.headers" :headerkey="key" :row="row" :transform="struct.transform">
            <!--能跟随表头改变排序-->
        </ListTd>
        <td>
            <router-link :to="{name:struct.toName,query:{id:row.id}}">
                编辑
            </router-link>
        </td>
        <td>
            <router-link :to="{name:struct.toName,query:{delete:row.id,parentid:struct.parentid}}">
                删除
            </router-link>
        </td>
    </tr>
</template>

<script>
    import ListTd from '@/components/frame/ListTd'
    export default{
        props:['row','struct'],
        components:{ListTd}
    }
</script>

<style scoped>
    td{padding: 0 20px;text-align: center;}
</style>