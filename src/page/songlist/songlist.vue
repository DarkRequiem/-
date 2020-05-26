<template>
    <div class="songlist">
        <div class="head" :style="{backgroundImage:'url('+listimg+')'}">
            <router-link to="home">
                <div class="back"></div>
                <div class="title">{{title}}</div>
                <div class="author">{{author}}</div>
            </router-link>
        </div>
        <div class="list" v-for="(item,index) in songlist" :key="item.index">
            <div class="id">{{index+1}}</div>
            <div class="song">
                <div class="songname">{{item.al.name}}</div>
                <div class="singer">{{item.ar[0].name}}</div>
            </div>
            <div class="play" @click="play(item.al.name,item.ar[0].name,item.id)"></div>
        </div>
    </div>
</template>


<script>
import {req} from '../../module/api.js'
import axios from 'axios'
export default {
    props:{
        i:Number
    },
    data(){
        return{
            listimg:'',
            songlist:[],
            author:'',
            title:''


        }
    },
    mounted(){
        var a = req()
        var data =a.gethotlist(this.i)
        data.then((res)=>{
            this.listimg=res.data.playlist.coverImgUrl
            this.songlist=res.data.playlist.tracks
            this.author=res.data.playlist.creator.nickname
            this.title=res.data.playlist.name
        })
        
    },
    watch:{
        
    },
    methods:{
        play(name,singer,id){
                console.log(name,singer,id)
             
            var _this=this
            axios.get('http://localhost:3000/song/detail?ids='+arguments[2])
            .then(
                    function(res){
                    _this.testthis = res.data.songs[0].al.picUrl
                    _this.$emit('change',name,singer,_this.testthis,id)
                    },
               
               
            )
         

            this.$emit("change",name,singer,id);
        }
    }
}
</script>


<style lang="scss" scoped>
  *{
      margin: 0;
      padding: 0;
  }
  .songlist{
      

   .head{
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url();
      width: 100%;
      height: 300px;
      margin-bottom: 20px;
      
      .back{
          width: 30px;
          height: 30px;
          position: absolute;
          top: 10px;
          left: 10px;
          background-image: url(../../asset/img/back.svg);
          background-size: cover;
          border-radius: 50%;
          background-color: white;
      }
      .title{
          text-align: center;
          font-size: 20px;
          color: white;
          display: block;
          top: 40px;
          position: relative;
      }
      .author{
          font-size: 16px;
          color: aliceblue;
          position: absolute;
          top: 150px;
          right: 30px;
      }
  }
   .list{
       display: flex;
       justify-content: space-between;
       align-items: center;
       margin-bottom: 8px;
       .id{
           width: 40px;
           height: 40px;
           border-radius: 50%;
           background-color: whitesmoke;
           text-align: center;
           line-height: 40px;
           margin-right: 8px;

       }
       .play{
           width: 30px;
           height: 30px;
           border-radius: 50%;
           background-image: url(../../asset/img/bofang.svg);
           background-size: cover;
           margin-right: 10px;
           border: 1px soild #E9E9E9;
       }

       .song{
           flex-grow: 1;
           .songname{
               font-size: 16px;

           }
           .singer{
               font-size: 12px;
           }
       }
   }
  }


</style>

