<template>
    <div class="moment">
    <div class="mask" :style="{backgroundImage: 'url(' + musicpi + ')' }">
       
    </div>
    
    <div class="box">
         <div class="mid">
          <img :src="musicpi" alt="">
         </div>
     </div>
    <div class="lyric">
        <div class="main"   @click="getinfo()">
            <div class="scroll"  v-for="item in ty">
                {{item}}
            </div>
        </div>
    </div>
     <!--   <div class="huan" @click="dose">
            <div class="d1"><div class="f1"></div></div>
            <div class="d2"><div class="f2"></div></div> 
        </div> -->
    <div class="frag" v-for="item in musicfull" :key="item.id">
        <div class="f1">
            <div class="set1">
                 <img :src="item.user.avatarUrl" alt="">
            <p>{{item.user.nickname}}<br>{{time}}</p>
            </div>
           
            <div class="num">{{item.likedCount}}</div>
            
        </div>
        <div class="f2">
            {{item.content}}
        </div>
    </div>
    <div class="hold"></div>
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
            ty:{},
            lyric:[''],
            b:0,
            s:0,
            musici:this.musicid,
            musicfull:{},
            username:'',
            time:'2020年02月24日',
            content:'',
            userpic:'',
            num:123,
            
        }
    },
    watch:{
        musici:function(){
            console.log(2)
        }
    },
    mounted(){
        clearTimeout()
        axios.get('http://localhost:3000/comment/music?id='+`${this.musici}`+'&limit=1')
        .then((res)=>{
               this.musicfull=res.data.hotComments
               console.log(res)
        })
        axios.get('http://localhost:3000/lyric?id='+`${this.musicid}`)
        .then((res)=>{
            console.log(res.data.lrc.lyric)
            var k = res.data.lrc.lyric.split(/\n/)
            for(let i=0;i<k.length;i++){
                k[i]= k[i].split("]")[1]   
            }   //歌词分割
           var j=res.data.lrc.lyric.split(/\n/)
           for(let i=0;i<j.length;i++){
               j[i]=j[i].split("]")[0]
               j[i]=j[i].split("[")[1]
              
           }
           for(let i=0;i<j.length;i++){
               var a =j[i]
               if(typeof(a)=="string"){
               j[i]=Number(a.split(":")[0]*60)+Number(a.split(":")[1])
               }
           }
           var s=0
           //audio ontimeupdate事件
           var aud = document.getElementsByTagName('audio')[0]
           aud.ontimeupdate=function(){
               //console.log(aud.currentTime)
               //console.log(j[3])
               for(let i=0;i<j.length;i++){
                   if(j[i]<aud.currentTime&&aud.currentTime<j[i+1]){
                      document.getElementsByClassName('main')[0].style.transform=`translateY(${-24*(i-2)}px)`
                       document.getElementsByClassName('scroll')[i].style.color='white'
                       document.getElementsByClassName('scroll')[i-1].style.color='#999'
                       
                   }
               }
           }
         
            
            console.log(j)
            console.log(k)
           this.ty = k
        
          //vue数组引用无法 ，外面包一层对象赋值进去
            
        })

    },
    computed:{
        tim:function(){

        }
    },
    methods:{
        getinfo(){
            var ss=document.getElementsByClassName('scroll')[0];
            console.log(ss)
            var aa=screen.availHeight-30;
            aa=`${aa}`+'px';
            console.log(aa)
            ss.style.top=`${aa}`
            document.getElementsByClassName('scroll')[0].style.color="white"
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
        filter: blur(3px);
        z-index: -10;
        

    }
    .lyric{
        
        display: block;
        position: relative;
        margin: 30px auto;
        width: 75%;
        height: 29vh;
        overflow: hidden;
        .main{
            margin:0 auto;
            font-size: 16px;
            transform: translateY(0px);
            
            .scroll{
                margin-top: 3px;
                text-align: center;
                color: #999;
                height: 21px;
            }
        }


    }
    .box{
        
        
        margin: 0 auto;
        width: 60vw;
        height: 40vw;
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
      background-color: rgba(0,0,0,0.2);
      width: 100%;
      border: 1px solid silver;
      border-color: transparent transparent silver transparent;
        .f1{
            display: flex; 
            justify-content: space-between;
            align-items: center;
            .set1{
                display: flex;
            p{
                margin-left: 5px;
                color: hsla(0,0%,100%,.7);
            }
            img{
                width: 27px;
                height: 27px;
                border-radius: 50%;
                margin-top: 8px;

            }
            }
            .num{
                width: 40px;
                height: 20px;
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
    .hold{
        width: 100%;
        height: 60px;
    }
}
    
</style>