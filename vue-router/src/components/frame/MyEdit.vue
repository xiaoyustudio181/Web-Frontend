<template>
    <div class="edit">
        <p v-for="each in struct">
            <component ref="input" :is="each.type" :data="each.data"></component>
        </p>
    </div>
</template>

<script>
    import TextBox from '@/components/frame/form/TextBox'
    import Numeric from '@/components/frame/form/Numeric'
    import ListBox from '@/components/frame/form/ListBox'
    import Radio from '@/components/frame/form/Radio'
    import CheckBox from '@/components/frame/form/CheckBox'

    export default{
        name:'Edit',
        components:{
            TextBox, Numeric,ListBox,Radio,CheckBox
        },
        props:['struct'],
        computed:{
            data:function () {
                var data=[];
                for(var each in this.$refs.input) //提取所有控件的数据，给父级组件用
                    data.push(this.$refs.input[each].value);
                return data;
            }
        }
    }
</script>

<style scoped>

</style>