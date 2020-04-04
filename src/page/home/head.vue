<template>
    <div class="head">
         <div class="top">
            <div class="logo"><img src="../../asset/img/logo.jpg" alt=""></div>
            <div class="bt">下载音乐</div>
        </div>
        <div class="menu">
            <div class="recommand"><router-link to="home">推荐</router-link></div>
            <div class="hot"><router-link to="hot">热歌</router-link></div>
            <div class="search"><router-link to="player">搜索</router-link></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
.head{

.top{
     display: flex;
     width: 100%;
     background: #d43c33;
     justify-content: space-between;
     .logo{
         display: block;
     }
     .bt{
         text-align: center;
         color: white;
         border: 1px solid white;
         border-radius: 5%;
         height: 40px;
         line-height: 40px;
         margin-right: 7px;
         margin-top: 2px;
         width: 100px;
         
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
         width: 10vh;
         height: 5vw;
         line-height: 5vw;
         margin-top: 5px;
         text-align: center;
         border-bottom: 2px solid transparent; 
        
         
     }
     .recommand:hover,.hot:hover,.search:hover{
         border-bottom: 2px solid #d43c33; 
     }
 }
}
</style>