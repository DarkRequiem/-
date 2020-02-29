<template>
    <div class="moment">
    <div class="mask" :style="{backgroundImage: 'url(' + musicpi + ')' }">
       
    </div>

    <div class="box">
         <div class="mid">
          <img :src="musicpi" alt="">
         </div>
     </div>
     <!--   <div class="huan" @click="dose">
            <div class="d1"><div class="f1"></div></div>
            <div class="d2"><div class="f2"></div></div> 
        </div> -->
    <div class="frag" v-for="item in musicfull" :key="item.id">
        <div class="f1">
            <img :src="item.user.avatarUrl" alt="">
            <p>{{item.user.nickname}}<br>{{time}}</p>
            <div class="num">{{item.likedCount}}</div>
            
        </div>
        <div class="f2">
            {{item.content}}
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
import ak from '../home/head'
export default {
    components: { ak:ak},
    props:{
        musicpi:String,
        musicid:Number,

    },
    data(){
        return{
            b:0,
            s:0,
            musici:this.musicid,
            musicfull:{},
            username:'wori',
            time:'2020年02月24日',
            content:'dsadsadhjsajkdhasjkdkhjsakdakj',
            userpic:'https://p2.music.126.net/dCV4V1QLrUc1foodBfv5dQ==/109951164721972545.jpg',
            num:123,
            
        }
    },
    watch:{
        musici:function(){
            console.log(2)
        }
    },
    mounted(){
        axios.get('http://192.168.1.2:3000/comment/music?id='+`${this.musici}`+'&limit=1')
        .then((res)=>{
               this.musicfull=res.data.hotComments
               console.log(res)
        })
    },
    computed:{
        tim:function(){

        }
    },
    methods:{
        getinfo(){
            
        },
        dos(){
      
        },
        dose(){
            var nu =window.setInterval(() => {
               if(this.b<180){
                var a =document.getElementsByClassName('d1')[0]
            console.log(1)
           
            a.style.transform = `rotate(${this.b}deg)`
            this.b=this.b+5
               console.log(this.b)}
               
               if(this.b>=180){
            var a =document.getElementsByClassName('d2')[0]
            var s =document.getElementsByClassName('f2')[0]
            console.log(1)
            s.style.borderColor = "red red red transparent"
            a.style.transform = `rotate(${this.s}deg)`
            this.s=this.s+5
               console.log(this.s)}
               if(this.s>=180){
               clearInterval(nu)
               }
           }, 1000);
        }
      
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    color: white;

}
a{
    text-decoration: none;
}
@keyframes rotate {
    0%{transform: rotate(0deg)}
    50%{transform: rotate(180deg)}
    100%{transform: rotate(360deg)}
}
.moment{

    width: 100%;
    margin: 0 auto;
    height: 100%;
    

    .mask{
       
        width: 100vw;
        height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: fixed;
        filter: blur(8px);
        z-index: -10;
        background-color: rgba(0,0,0,.5);

    }
    .box{
       
        margin: 0 auto;
        width: 60vw;
        height: 60vw;
        align-items: center;
        z-index: 21;
        margin-bottom: 10vh;
        .mid::after{
            content:"";
            background-image: url(../../asset/img/needle.png);
            width: 30vw;
            display: block;
            position: absolute;
            height: 30vw;
            background-size: contain;
            background-repeat: no-repeat;
            left: 50%;
            background-position: center;
            margin-left: -13vw;
            top: 0;
            
        }
        .mid::before{
             content:"";
            background-image: url(../../asset/img/disc.png);
             margin-left: -18vw;
            background-position: center;
            width: 36vw;
            display: block;
            position: absolute;
            height: 36vw;
            background-size: contain;
            background-repeat: no-repeat;
            left: 50%;
            top:20vw;
        }
        .mid{
            width: 60vw;
            height: 50vh;
            img{
                animation: rotate 20s linear infinite;
                width: 20vw;
                height: 20vw;
                position: absolute;
                display: block;
                left: 50%;
                top:28vw;
                margin-left: -10vw;
                border-radius: 50%;
            }
        }

    }
    .huan{
        width: 120px;
        height: 110px;
        .d1{
            width: 110px;
            height: 110px;
            position: absolute;
            z-index: 12;
     
             .f1{
           
            width: 50px;
            height: 100px;
            border-top-left-radius: 55px;
            border-bottom-left-radius: 55px;
            border: 5px solid red;
            overflow: hidden;
            border-color: red transparent red red;
        }
        }
        .d2{
             width: 110px;
             height: 110px;
              position: absolute;
              left: 0px;
              z-index: 2;
            .f2{
            float: right;
            width: 50px;
            height: 100px;
            border-top-right-radius: 55px;
            border-bottom-right-radius: 55px;
            border: 5px solid black;
            overflow: hidden;
            border-color: black black black transparent;
           
            
        }
        }
        
    }
    .frag{
        
      width: 100%;
      border: 1px solid silver;
      border-color: transparent transparent silver transparent;
        .f1{
            display: flex; 
            justify-content: space-between;
            align-items: center;
            p{
                width: 80%;
                color: hsla(0,0%,100%,.7);
            }
            img{
                width: 7%;
                height: 7vw;
                border-radius: 50%;
                margin-top: 8px;

            }
            .num{
                width: 10%;
                height: 8vw;
                color: #999;
                position: relative;
                display: block;
                margin-top: 10px;
                
                 
            }
            .num::after{
                content: "";
                background-image: url(../../asset/img/点赞.svg);
                background-size: contain;
                background-position: center;
                position: absolute;
                width: 20px;
                height: 20px;
                left: -20px;
                top: 0px;
            }
        }
        .f2{
            width: 80%;
            margin: 0 auto;
            margin-bottom: 5px;
        }
        
        
    }
}
    
</style>