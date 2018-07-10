<template>
    <div class="container" @click.stop="handleGallaryClick">
        <div class="wrapper">
            <van-swipe>
                <van-swipe-item v-for="(img,index) in imgs" :key="index">
                    <img :src="img" alt="">
                </van-swipe-item>
            </van-swipe>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Gallary',

        props: {
            imgs: {
                type: Array,
                default () {
                    return []
                } 
            }
        },

        methods: {   
            handleGallaryClick () {
                this.$emit('close')
            }
        }
    }
</script>
<style>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 99;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: #000;
    }
    .container .wrapper{
          height: 0;
          width: 100%;
          padding-bottom: 100%;
          overflow: inherit;
    }  
     .container .wrapper img{
         width: 100%;
     }
</style>

