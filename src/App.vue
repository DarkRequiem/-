<template>
  <div id="app">
    <router-view id="screen"
    @change="changed"
    @play="play"
    ></router-view>
    <div class="player">
     <img src="" alt="" class="jpg">
     <p class="name"></p>
     <p class="singer"></p>
     <div class="control"></div>
     <div class="pplaylist"></div>
    </div>
    <audio id="music" :src="test"></audio>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
  name: 'app',
  data() {
    return {
      x: 1,
      musicname: '',
      singer: '',
      musicurl:'',
      test:{},
      musicphoto:'https://images.unsplash.com/photo-1556470856-878953ddea25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',
      process:'./asset/img/icons-start.svg'

    }
  },
  mounted() {
    this.setlistheight();
  },
  updated() {
    this.setlistheight();
  },
  methods: {
    start(){
        if(this.x==0){
        document.getElementById("music").pause();
      
        this.x=1;
        console.log(this.x);
        return;
      }
      if(this.x==1){
      document.getElementById("music").play();
     
      this.x=0;
      console.log(this.x);
      }
    
    },
    changed(){
      this.musicname=arguments[0];
      this.singer=arguments[1];
      this.musicurl='https://music.163.com/song/media/outer/url?id='+arguments[2]+'.mp3';
      axios.get(this.musicurl).then(this.set)
    
    },
    set(res){
      res=res.data;
      this.test=res.data[0].url;
      this.musicphoto=res.data[0].
      console.log(res);
     
    },
    play(){
      this.musicname=arguments[0];
      this.singer=arguments[3];
      this.musicurl='http://localhost:3000/song/url?id='+arguments[1];
      this.musicphoto=arguments[2];
      axios.get(this.musicurl).then(this.set)

    },
    setlistheight(){
       var top = document.getElementsByClassName("top")[0].offsetHeight;
       var menu = document.getElementsByClassName("menu")[0].offsetHeight;
       var list = document.getElementsByClassName("list1")[0].offsetHeight;
       var newmusic = document.getElementsByClassName("newmusic")[0].offsetHeight;
       console.log(top,menu,list,newmusic);
    }
 
   
  },
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}

.player{
  width: 100%;
  position: fixed;
  display: block;
  height: 60px;
  bottom: 0px;
  
  .jpg{
    display: inline-block;
    width: 50px;
    height: 50px;
    position: relative;
    border-radius: 50%;
    background-color: red;
  }
  .name{
    
  }
  
}
</style>

