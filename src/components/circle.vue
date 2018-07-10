<template>
    <div class="circle">
        <van-list
            v-model="loading"
            :finished="finished"
            @load="onLoad"
        >
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="talk" v-for="(info,index) in result" :key="info.id">       
                    <div class="header">
                        <img class="avatar"  width="42px" height="42px"  :src="info.avatar" />
                        <span class="name">{{info.name}}</span>
                        <van-button size="small" class="button">关注</van-button>
                    </div>
                    <div class="body">
                        <p>{{info.content}}</p>
                        <div class="album" @click="handlegallary(info.album)">
                            <img 
                                v-for="(img,index) in info.album" 
                                :key="index"
                                :class="{single:info.album.length===1}" 
                                :src="img"        
                            >
                        </div>
                    </div>
                    <div class="comment">
                        <div class="action">
                            <div>
                                <span>{{info.createTime}}</span>
                            </div>
                            <i class="iconfont icon-pinglun"></i>
                        </div>
                        <div class="like" v-if="info.like">
                            <i class="iconfont icon-zan"></i>
                            <span v-for="likeName in info.likeUsers">{{likeName.name}},</span>   
                        </div>
                    </div>
                </div>
            </van-pull-refresh>
        </van-list>
        <gallary  
            v-if="showGallary" 
            :imgs="imgs"
            @close="handleGallaryClose"
        >
        </gallary>   
    </div>  
</template>

<script>
import axios from 'axios'
import Gallary from './gallary'
export default {
    name: 'CirCles',

    components:{
        Gallary
    },

    data () {
        return {
            result: [],
            isLoading: false,
            loading: false,
            finished: false,
            page: 1,
            showGallary: false,
            imgs: []
        }
    },
    mounted () {
        axios.post('http://m.tutubox.cn/api/talk/page',
            {
                page: 1,
                pageSize: 20, 
                userId: 0, 
                focus: false
            },
            {
                headers: {
                   "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjgyMjkzMTM4LCJleHAiOjE1MzIzNDI2Nzd9.fHOW6zBWZp65VxznhGqlgKkTptYHAhcrN7sQfCNmJc8"
                }
            }
        )
        .then((res)=>{
            if(res.status===200){
                this.result=res.data.data
            }
        })     
    },
    methods:{
        onRefresh () {
            axios.post('http://m.tutubox.cn/api/talk/page',
            {
                page: 1,
                pageSize: 20, 
                userId: 0, 
                focus: false
            },
            {
                headers: {
                   "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjgyMjkzMTM4LCJleHAiOjE1MzIzNDI2Nzd9.fHOW6zBWZp65VxznhGqlgKkTptYHAhcrN7sQfCNmJc8"
                }
            }
            )
            .then((res)=>{
                if(res.status===200){
                    this.result=res.data.data
                    this.isLoading = false 
                }
            })       
        },
        onLoad () {
            // this.page++
            // this.finished = false
            // axios.post('http://m.tutubox.cn/api/talk/page',
            // {
            //     page: this.page,
            //     pageSize: 20, 
            //     userId: 0, 
            //     focus: false
            // },
            // {
            //     headers: {
            //        "Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MjgyMjkzMTM4LCJleHAiOjE1MzIzNDI2Nzd9.fHOW6zBWZp65VxznhGqlgKkTptYHAhcrN7sQfCNmJc8"
            //     }
            // }
            // )
            // .then((res)=>{
            //     if(res.status===200){
            //         this.result= this.result.concat(res.data.data)
            //         this.loading = false 
            //         this.finished = true
            //     }
            // })  
        },
        handlegallary (imgs) {
            this.showGallary = true
            this.imgs = imgs
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .circle{
        background-color: #fff;
    }
    .talk{
        margin: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
    }
    .talk .header{
        display: flex;
        justify-content: space-between;
    }
    .talk .header img{
        border-radius: 50%;
    }
    .talk .header .name{
        flex: 1;
        text-align: left;
        padding: 0 8px;
        color: #888;
    }
    .talk .header .button{
            width: 54px;
        height: 22px;
        line-height: 22px;
        background-color: #fff;
        color: #bea473;
        border-color: #bea473;
    }
    .talk .body{
        margin-top: -15px;
        padding-left: 50px;
        text-align: left;
    }
    .talk .body p{
        word-break: break-word;
        margin-bottom: 10px;
    }
    .talk .body .album{
        display: flex;
        justify-content: left;
        flex-flow: row wrap;
    }
    .talk .body .album img{
        margin-right: 4px;
        margin-bottom: 4px;
        width: 80px;
        height: 82px;
    }
    .talk .body .album img.single{
        width: 186px;
        height: 176px;
    }
    .talk .comment{
        padding-left: 50px;
    }
    .talk .comment .action{
        display: flex;
        justify-content: space-between;
    }
     .talk .comment .action span{
         font-size: 12px;
     }
    .talk .comment .like{
        text-align: left;
        background-color: #f3f3f3;
        padding: 4px;
        font-size: 13px;
    }
    .talk .comment .like span{
        margin-left: 3px;
        color: #6495ed;
    }
</style>
