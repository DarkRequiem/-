<template>
  <div id="app">
        
        <transition name="fade">
    <router-view id="screen"
    :musicpi="musicpic"
    :musicid="x"
    @change="changed"
    @playf="play"  
    ></router-view>
    </transition>


<router-link to="comment">
    <div class="player">
     <div class="go"></div>
     <img :src="musicpic" alt="" class="jpg">
   
     <p class="name">{{musicname}}</p>
     <br>
     <p class="singer">{{singer}}</p>
    
     <div class="playlist" @click="showlist"></div>
     <div class="control" @click="onoff"></div>
     
    </div>
    </router-link>
    <audio id="music" :src="musicurl" autoplay="autoplay"></audio>
  </div>
</template>

<script>
import what from './page/home/head.vue'
 
  export default {
  name: 'app',
  data() {
    return {
      x: 1,
      musicname: 'test',
      singer: 'test',
      musicurl:'',
      test:{},
      musicpic:require('./asset/img/Disc.svg'),
      process:'./asset/img/icons-start.svg',
      playlist:[],
      musicprocess:0,
      time:0,

    }
  },
  mounted() {
    
  },
  updated() {
  
  },
  watch:{
    musicname:function(){
     var a =document.getElementById("music")
      a.ondurationchange = function() {
      this.time=a.duration
      console.log(a.duration)
      var b =document.getElementsByClassName("go")[0]
      b.style.animation="go 330s linear";
    
    

};
    
    }
  },
  methods: {
    hidden(){
      var a = document.getElementsByClassName("player")[0]
      a.style.display ='none'
    },
    changed(){
      this.musicname=arguments[0];
      this.singer=arguments[1];
      this.musicpic=arguments[2];
      this.musicurl='https://music.163.com/song/media/outer/url?id='+arguments[3]+'.mp3';
      this.x=arguments[3];
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
    },
    play(){
     this.musicname=arguments[0];
      this.singer=arguments[1];
      this.musicpic=arguments[2];
      this.musicurl='https://music.163.com/song/media/outer/url?id='+arguments[3]+'.mp3';
      this.x=arguments[3];
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
.fade-enter-active {
  transition: margin 0.5s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  margin-left: -100vw;
  position: absolute;

}
.fade-leave-to{
  display: none;
}
.fade-leave{
  margin-left: 100vw;
  
}
.fade-leave-active{
  transition: margin 5s;
}
@keyframes go {
  0%{width: 0%}
  50%{width: 50%}
  100%{width: 100%}
}
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
.full{
    display: block;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
   
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(50px);
    background-image: url(https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3778173668,1422088699&fm=26&gp=0.jpg)
  }

.player{
  width: 100%;
  position: fixed;
  display: block;
  height: 60px;
  bottom: 0px;
  font-size: 8px;
  line-height: 18px;
  .go{
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  left: 3px;
  width: 0%;
  height: 3px;
  background-color: red;
  animation: go 20s linear;
  
}
  
  .jpg{
    display: block;
    width: 40px;
    height: 40px;
    position: relative;
    border-radius: 50%;
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
    width: 30px;
    height: 30px;
    top: 5px;
    right: 70px;

    background-image: url(./asset/img/bofang.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  .playlist{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 5px;
    right: 2px;
    background-image: url(./asset/img/playlist.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  
  
}
</style>

