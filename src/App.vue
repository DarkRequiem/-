<template>
  <div id="app">
    
    <transition name="fade">
    <router-view id="screen"
    :musicpi="musicpic"
    :musicid="x"
    :i="id"
    @change="changed"
    @playf="play"  
    @id="setid"
    ></router-view>
    </transition>

 
    
    <div class="player" v-show="singer"> 
     <div class="go"></div>
     <router-link to="comment" @click="hidden">
     <img :src="musicpic" alt="" class="jpg">
     </router-link>
     <p class="name">{{musicname}}</p>
     <br>
     <p class="singer">{{singer}}</p>
    
     <div class="playlist" @click="showlist" v-show="singer"></div>
     <div class="control" @click="onoff" v-show="singer"></div>
     
    </div>

    <div class="his">
      <div class="hislist" v-for="(item, index) in hislist" :key="index">
        <div class="id">{{index+1}}</div>
            <div class="song">
                <div class="songname">{{item}}</div>
               
            </div>
            <div class="play" @click="del()"> </div>
      </div>
      
    </div>
    
    <audio id="music" :src="musicurl" autoplay="autoplay"></audio>
  </div>
</template>

<script>
import h from './page/home/head.vue'
 
  export default {
  //components:{ h:h},
  name: 'app',
  data() {
    return {
      x: 1,
      musicname: '',
      singer: '',
      musicurl:'',
      test:{},
      musicpic:'',
      //musicpic:require('./asset/img/Disc.svg'),
      process:'./asset/img/icons-start.svg',
      playlist:[],
      musicprocess:0,
      time:0,
      id:Number,
      hislist:[],
      h:0
    }
  },
  mounted() {
     
  },
  updated() {
  
  },
  watch:{
    musicname:function(){
      clearInterval(mu)
      this.hislist.push(this.musicname)
      var now = 0
      var b = document.getElementById("music")
      setTimeout(function(){
      console.log(b.duration)
      },500)
      var a = document.getElementsByClassName("go")[0]
      let mu = setInterval(() => {
        if(now==100){
          clearInterval(mu)
        }
        
        now = (b.currentTime/60)/(b.duration/60)*100
        
        a.style.width=`${now}`+'%'
      }, 1000);
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
      if(this.h==0){
          document.getElementsByClassName('his')[0].style.bottom='50px'
          this.h=1
      }
      else{
        document.getElementsByClassName('his')[0].style.bottom='-250px'
          this.h=0
      }
      
    },
    del(index){
      this.hislist.splice(index,1)
    },
    onoff(){
      if(this.musicprocess==0){
      document.getElementById("music").pause()
      this.musicprocess=1
      var a = document.getElementsByClassName('control')
      a[0].style.backgroundImage='url(img/stop.90cde5bd.svg)';
 
      }
      else{
        document.getElementById("music").play()
        this.musicprocess=0
        var a = document.getElementsByClassName('control')
      a[0].style.backgroundImage='url(img/bofang.16c0c7c9.svg)';
      }
    },
    setid(){
      this.id =arguments[0]
      console.log(arguments[0])
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
  transition: margin .5s;
}
.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  margin-left: -100vw;
  position: absolute;

}
.fade-leave-to{
   margin-left: -100vw;
  position: absolute;

}
.fade-leave{
  
 position: absolute;
  
}
.fade-leave-active{
  transition: margin .5s;
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
  z-index: 5;
  width: 100%;
  position: fixed;
  display: block;
  height: 60px;
  bottom: -13px;
  font-size: 8px;
  line-height: 18px;
  background-color: white;
  border-radius: 5px 5px;
  .go{
  content: "";
  display: block;

  top: -2px;
  left: 3px;
  width: 0%;
  height: 3px;
  background-color: red;
  margin-bottom: 3px;

  
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

    background: url(./static/img/bofang.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
  .controlstop{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 5px;
    right: 70px;

    background: url(./static/img/stop.svg);
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
.his{
    position: fixed;
    bottom: -250px;
    width: 100%;
    height: 250px;
    background-color: #EFF1F2;
    border-radius: 5px 5px;
    transition: bottom 1s;
    overflow: auto;
     .hislist{
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin: 8px;
       border-bottom: 1px solid silver;;
       
       .id{
           width: 20px;
           height: 20px;
           border-radius: 50%;
           background-color: whitesmoke;
           text-align: center;
           line-height: 20px;
           margin-right: 8px;

       }
       .play{
           width: 20px;
           height: 20px;
           border-radius: 50%;
           background-image: url(./asset/img/close.svg);
           background-size: cover;
           margin-right: 10px;
           border: 1px soild #E9E9E9;
       }

       .song{
           flex-grow: 1;
           .songname{
               font-size: 16px;
           }
           
       }
   }
  }
  
</style>

