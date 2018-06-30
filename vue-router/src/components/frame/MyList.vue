<template>
    <div>
        <p>
            <router-link :to="{name:struct.toName,query:{parentid:struct.parentid}}">
                新增人物
            </router-link>
        </p>
        <table cellpadding="0" cellspacing="0" border="1">
            <caption>{{struct.caption}}</caption>
            <tr>
                <th v-for="header in struct.headers">{{header}}</th>
                <th>编辑</th>
                <th>删除</th>
            </tr>
            <tr is="ListRow" v-for="row in struct.rows" :row="row" :struct="struct"></tr>
        </table>
    </div>
</template>

<script>
    import ListRow from '@/components/frame/ListRow'
    import $ from 'jquery';

    export default{
        props:['struct'],
        components:{ListRow}
    }

    export function Request(method,func,data) {
        this.TestMode=0;
        this.ip='localhost';//192.168.10.176
        this.baseUrl='http://'+this.ip+'/vue-router/backend/';
        return this.request(method,func,data);
    }
    Request.prototype.request = function (method,func,data) {
        var TestMode=this.TestMode;
        var url=this.baseUrl+func+'.php';
        var type=method?'POST':'GET';
        if(TestMode){
            console.warn(type+' 向 '+url+' 发送数据：');
            console.log(data);
        }
        var ajax=$.ajax({
            url:url,
            type:type,    //发送请求的方式
            //async:true,//异步，只能在回调函数中获取值；
            async:false,//同步，此时外面才能获取到回调函数中的值。
            data:data,
            dataType:'json',    //期待的返回数据的类型（注意字母大小写）
            success:function(data){    //接收成功，参数是返回的数据
                if(TestMode){
                    console.warn(type+' 从 '+url+' 收到数据：');
                    console.log(data);
                }
            },
            error:function(xhr,status,message){
                console.log('异常消息: '+status+' '+message);
            }
        });
        return ajax.responseJSON;
    };
</script>

<style scoped>
    th,td{padding: 0 20px;text-align: center;}
    th:nth-last-child(1),th:nth-last-child(2){padding: 0 20px;}
</style>