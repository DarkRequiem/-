<template>
    
    <div class="main">  
        <h></h>
        <div class="list1">
            <div class="tag">推荐歌单</div>
            <div class="rongqi">
                <div class="box" v-for="item of recommand" :key='item.id' @click="showlist(item.id)">
                   
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
import h from './head'
export default {
    name:'home',
    components:{ h:h},
    data() {
        return {
            recommand:{},
            hot:{},
            testthis:''
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
                   this.handle
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
            var _this=this
            axios.get('http://localhost:3000/song/detail?ids='+arguments[2])
            .then(
                    function(res){
                    _this.testthis = res.data.songs[0].al.picUrl
                    _this.$emit('change',name,singer,_this.testthis,id)
                    },
               
               
            )
         

            this.$emit("change",name,singer,id);

        },
        showlist(id){
            console.log(id)
            this.$emit("id",id)
            this.$router.push({path:'/songlist'})
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
a{
    text-decoration: none;
}
.full{
    width: 100%;
    height: 100%;
    position: absolute;
}
.main{
    padding: 0;
    margin: 0;
    width: 100%;
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
                 border-radius: 8px;
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
 }
</style>
