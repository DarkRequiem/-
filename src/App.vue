<template>
  <div id="app">
     <div class="top">
            <div class="logo"><img src="./asset/img/logo.jpg" alt=""></div>
            <div class="bt">下载音乐</div>
        </div>
        <div class="menu">
            <div class="recommand"><a href="">推荐</a></div>
            <div class="hot"><router-link to="hot">热歌</router-link></div>
            <div class="search"><router-link to="player">搜索</router-link></div>
        </div>
        
    <router-view id="screen"
    @change="changed"
    @play="play"  
    ></router-view>
    <div class="player">
     <img :src="musicpic" alt="" class="jpg">
     <p class="name">{{musicname}}</p>
     <br>
     <p class="singer">{{singer}}</p>
     <div class="playlist" @click="showlist"></div>
     <div class="control" @click="onoff"></div>
     
    </div>
    <audio id="music" :src="musicurl" autoplay="autoplay"></audio>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
  name: 'app',
  data() {
    return {
      x: 1,
      musicname: 'test',
      singer: 'test',
      musicurl:'',
      test:{},
      musicpic:'',
      process:'./asset/img/icons-start.svg',
      playlist:[],
      musicprocess:0

    }
  },
  mounted() {
    
  },
  updated() {
  
  },
  methods: {
    changed(){
      this.musicname=arguments[0];
      this.singer=arguments[1];
      this.musicpic=arguments[2];
      this.musicurl='https://music.163.com/song/media/outer/url?id='+arguments[3]+'.mp3'
    },
    showlist(){
      console.log('ko233')
    },
    onoff(){
      if(this.musicprocess==0){
      document.getElementById("music").pause()
      this.musicprocess=1
      }
      else{
        document.getElementById("music").play()
        this.musicprocess=0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 @function px2em($px, $base-font-size: 16px) {
    @if (unitless($px)) {
        @warn "Assuming #{$px} to be in pixels, attempting to convert it into pixels for you";
        @return px2em($px + 0px); // That may fail.
    } @else if (unit($px) == em) {
        @return $px;
    }
    @return ($px / $base-font-size) * 1em;
}
*{
  margin: 0;
  padding: 0;
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
.player{
  width: 100%;
  position: fixed;
  display: block;
  height: 60px;
  bottom: 0px;
  
  .jpg{
    display: block;
    width: 50px;
    height: 50px;
    position: relative;
    border-radius: 50%;
    background-color: blue;
    float: left;
    margin-left: 2%;
    @keyframes rotate {
      0%{transform:rotate(0deg);}
      50%{transform:rotate(180deg);}
      100%{transform:rotate(360deg);}
    }
    animation:rotate 6s linear infinite;
  }
  .name{
    float: left;
    margin-left: 5%;
  }
  .singer{
    float: left;
     margin-left: 5%;
  }
  .control{
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 10px;
    right: 70px;

    background-image: url(./asset/img/play.jpg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  .playlist{
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: 10px;
    right: 2px;
    background-image: url(./asset/img/playlist.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  
}
</style>

