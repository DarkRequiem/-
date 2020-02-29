<template>
    <div class="play">
      <div class="top">
          <img src="../../asset/img/input.svg" alt="">
          <input v-model="input" type="text" class="text" placeholder="搜索歌曲">
      </div>
      <div class="history">
          <div class="search"  v-for="item of hots" :key="item.id">{{item.first}}</div>
         
      </div>
      <div class="historylist" v-for="item of his" :key="item.id" v-if="goal"
      >
          <div class="left">
          <img class="first" src="../../asset/img/hour.svg" alt="">
          <div class="list">{{item}}</div>
          </div>
          <img class="last" src="../../asset/img/close.svg" alt="">
      </div>
      <div class="result">
          <div class="reslist" @click="playf(item.name,item.artists[0].id,item.artists[0].img1v1Url,item.artists[0].name)" 
          v-for="item of song" :key="item.id" v-if="song">
              <img class="first" src="../../asset/img/741.svg" alt="">
              <div class="list">{{item.name}}</div>
          </div>
      </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name:'player',
    data(){
        return {
            target:'',
            hots:[],
            input:'',
            song:[],
            timeer:null,
            his:[],
            goal:false

        }
    },
    mounted() {
        this.gethotsearch();

    },
    methods: {
        gethotsearch(){
            axios.get('http://192.168.1.2:3000/search/hot')
            .then(this.sethot)
        },
        sethot(res){
            console.log(res.data)
            this.hots=res.data.result.hots;
            
            console.log(this.hots)
        },
        playf(name,id,img,singer){
            console.log(id);
            console.log(name)
            console.log(singer)
            console.log(img)

            this.$emit("playf",name,singer,img,id,);
        }

    },
    watch:{
        input() {
           
            if(this.timeer){
                clearTimeout(this.timeer)
            }
            if(this.input==''){
                this.song=[];
                this.goal=true;
                
                return
            }
            this.timeer=setTimeout(()=>{
                 
              axios.get('http://192.168.1.2:3000/search?keywords='+this.input)
            //   .then(function (res) {
                  
            //        that.song=res.data.result.songs;
            //   })
              .then((res)=>{
                  this.song=res.data.result.songs;
                  
              })

             this.his.push(this.input);
           
              
              
              
              
                
               
                
            },500)
        }
    }
}
</script>


<style lang="scss" scoped>
   *{
       margin: 0;
       padding: 0;
   }
    .play{
        .top{
            background:#ebecec;
            border-radius: 30px;
            width: 67%;
            
           margin: 5% auto;
            img{
                width: 15px;
                height: 15px;
                padding-left: 20px;
                padding-top: 4px;
               
            }
            .text{
                border: none;
                width: 200px;
                height: 20px;
                background: #ebecec;

            }
        }
        .history{
            width: 80%;
            margin: 0 auto;
            display: flex;
            padding-top: 50px;
            
            flex-wrap: wrap;
            position: relative;
            .search{
                border-radius: 30px;
                background: #ebecec;
                font-size: 12px;
                padding: 10px;
                margin-top: 7px;
                margin-right: 10px;
            }
        }
        .historylist{
            display: flex;
            justify-content: space-between;
            padding-top: 30px;
            border-bottom: 1px solid #ebecec;
            

            .left{
                display: flex;
                .first{
                    width: 14px;
                    height: 14px;
                    padding-right: 8px;
                    position: relative;
                    top: 3px;
                    left: 4px;
                }
            }
            .last{
                width: 12px;
                height: 12px;
                position: relative;
                right: 5px;
            }
        }
        .result{
            position: absolute;
            margin-top: 10px;
            .reslist{
                width: 100%;
                height: 47px;

                img{
                    width: 15px;
                    height: 15px;
                    padding-left: 5px;
                    padding-right: 8px;
                }
                .list{
                    display: inline;
                    font-size: 16px;
                }
            }
        }
        
    }
</style>
