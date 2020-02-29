<template>
    <div class="nice">
        <h></h>
        <div class="box">
            <img :src="data17.playlist.coverImgUrl" alt="fuck" class="jpg">
            <div class="mini">
                <p>1.{{data17.playlist.tracks[0].name}}</p>
                <p>2.{{data17.playlist.tracks[1].name}}</p>
                <p>3.{{data17.playlist.tracks[2].name}}</p>
            </div>
        </div>
          <div class="box">
            <img :src="data16.playlist.coverImgUrl" alt="fuck" class="jpg">
            <div class="mini">
                <p>1.{{data16.playlist.tracks[0].name}}</p>
                <p>2.{{data16.playlist.tracks[1].name}}</p>
                <p>3.{{data16.playlist.tracks[2].name}}</p>
            </div>
        </div> <div class="box">
            <img :src="data15.playlist.coverImgUrl" alt="fuck" class="jpg">
            <div class="mini">
                <p>1.{{data15.playlist.tracks[0].name}}</p>
                <p>2.{{data15.playlist.tracks[1].name}}</p>
                <p>3.{{data15.playlist.tracks[2].name}}</p>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
import h from '.././home/head'
export default {
     components:{ h:h},
    data(){
        return{
        hoturl:'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png',
        no1:'11111111',
        no2:'222222222',
        no3:'333333',
        data17:{},
        data16:{},
        data15:{}
        }
    },
    mounted(){
        this.gethot()
    },
    methods: {
        gethot(){
            axios.get('http://192.168.1.2:3000/top/list?idx=17')
            .then((res)=>{
                this.data17=res.data
            })
            axios.get('http://192.168.1.2:3000/top/list?idx=16')
            .then((res)=>{
                this.data16=res.data
            })
            axios.get('http://192.168.1.2:3000/top/list?idx=15')
            .then((res)=>{
                this.data15=res.data
            })
        }
    },
}
</script>

<style lang="scss" scoped>
*{
    margin:0;
    padding:0;
}
a{
    text-decoration: none;
}
.nice{
    width: 100%;
    margin-top: 20px;
   .box{
       width: 95%;
       display: flex;
       margin:10px auto;
       
       align-items: center;

       .jpg{
           width: 25%;
           height: 25%;
           margin-right: 10%;
           border-radius: 6px;
       }
       .mini{
           p{
               line-height: 40px;  
           }
       }
       
   }
}
</style>

