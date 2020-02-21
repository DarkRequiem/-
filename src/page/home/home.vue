<template>
    <div class="main">
        <div class="top">
            <div class="logo"><img src="../../asset/img/logo.jpg" alt=""></div>
            <div class="bt">下载音乐</div>
        </div>
        <div class="menu">
            <div class="recommand"><a href="">推荐</a></div>
            <div class="hot"><router-link to="top">热歌</router-link></div>
            <div class="search"><router-link to="player">搜索</router-link></div>
        </div>
        <div class="list1">
            <div class="tag">推荐歌单</div>
            <div class="rongqi">
                <div class="box" v-for="item of recommand" :key='item.id'>
                    <div class="photo">
                        <img :src="item.picUrl" alt="">
                    </div>
                    <div class="text">{{item.name}}</div>
                    <div class="num">{{Math.ceil(item.playCount/10000)}}万</div>
                </div>
            </div>

        </div>
        <div class="newmusic">
            <div class="tag">最新音乐</div>
            <div class="list">
                <div class="detail" v-for="item of hot" :key='item.id'
                @click="setmusic(item.name,item.song.artists[0].name,item.id)">
                    <div class="left">
                        <div class="head">{{item.name}}</div>
                        <div class="bottom"><i></i> {{item.song.artists[0].name}}</div>
                    </div>
                    <div class="right">
                        <img src="../../asset/img/play.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'home',
    data() {
        return {
            recommand:{},
            hot:{}
        }
    },
    mounted(){
     this.getinfo(),
     this.getinfo1()
    },
    methods:{
        getinfo(){
            axios.get('http://localhost:3000/personalized')
            .then(
                console.log(123),
                console.log(this),
                console.log(123)
            )
        },
        handle(res){
            res=res.data;
            this.recommand = res.result;
            console.log(this.recommand);
        },
        getinfo1(){
            axios.get('http://localhost:3000/personalized/newsong').then(this.handle1)
        },
        handle1(res){
            res=res.data;
            this.hot=res.result;
           
        },
        setmusic(name,singer,id){
           
            this.$emit("change",name,singer,id);

        }
    },

}
</script>


<style lang="scss" scoped>
//  @import url('../../asset/mixin.scss');
 @function px2em($px, $base-font-size: 16px) {
    @if (unitless($px)) {
        @warn "Assuming #{$px} to be in pixels, attempting to convert it into pixels for you";
        @return px2em($px + 0px); // That may fail.
    } @else if (unit($px) == em) {
        @return $px;
    }
    @return ($px / $base-font-size) * 1em;
}
   .main{
    padding: 0;
    margin: 0;
}
a{
    text-decoration: none;
}
 .top{
     display: flex;
     width: 100%;
     height: px2em(65, -font-size);
     background: #d43c33;
     justify-content: space-between;
     .logo{
         display: block;
         padding-top: px2em(7, -font-size);
     }
     .bt{
         text-align: center;
         margin-top: px2em(15, -font-size);
         margin-right: px2em(10, -font-size);
         color: white;
         width: px2em(90, -font-size);
         height: px2em(30, -font-size);
         border: 1px solid white;
         border-radius: 5%;
     }
 }
 .menu{
     display: flex;
     justify-content: space-around;
     a{
             display: block;
             padding-top: px2em(10, -font-size);
             padding-left: px2em(20, -font-size);
             color: #d43c33;
         }
     .recommand,.hot,.search{
         width: px2em(78, -font-size);
         height: px2em(42, -font-size);
        
         
     }
     .recommand:hover,.hot:hover,.search:hover{
         border-bottom: 2px solid #d43c33; 
     }
 }
 .list1{
     padding-top: px2em(20, -font-size);
     .tag{
         padding-left: px2em(4, -font-size);
         font-size: px2em(19, -font-size);
         border-left: 2px solid #d43c33;
     }
     
     .rongqi{
         display: flex;
         justify-content: space-between;
         width: 100%;
         flex-wrap: wrap;
         .box{
             width: 29.7%;
             margin-bottom: 20px;
             position: relative;
             .photo{
                 img{
                 width: 100%;
                 height: 100%;
              }
             }
             .text{
                 font-size: px2em(12, -font-size);
             }
             .num{
                 position: absolute;
                 top: 0;
                 right: 0;
                 color: white;
                 font-size: px2em(10, -font-size);
                 ::before{
                     background-image: url(../../asset/img/ear.svg);
                     width: px2em(18, -font-size);
                     height: px2em(18, -font-size);
                 }
             }
             
         }
     }
 }
 .newmusic{
     margin-bottom: 65px;
      .tag{
         padding-left: px2em(4, -font-size);
         font-size: px2em(19, -font-size);
         border-left: 2px solid #d43c33;
     }
     .list{
       padding-top: px2em(10, -font-size);
         .detail{
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid #d43c33;
             .left{
                 padding-left: px2em(15, -font-size);
                 .head{
                     font-family: Helvetica, sans-serif;
                 }
                 .bottom{
                     font-size: px2em(10, -font-size);
                    i{
                        display: inline-block;
                     width: 15px;
                     height: 9px;
                     background-image: url(../../asset/img/sq.jpg);
                     background-size: 15px 9px;
                     
                    }
                }
             }
         }
     }
 }
</style>
