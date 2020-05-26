import axios from 'axios'

const qiuqiu ={
     url:'localhost:8080',
     list:'/list',
     
     getlistdetail(){
        axios.get(url+list+'???????????')
        .then((res)=>{
            return res.data
        })
    },

    gethotdetail(){
        axios.get(url+'?????????????')
        .then((res)=>{
            return res.data
        })
    }
}

function req(){
    const url ='http://localhost:3000'
    
   function gethotlist(){
       return axios.get(url+'/playlist/detail?id='+`${arguments[0]}`)
    }


    return {
        gethotlist:gethotlist,

    }
}
export {req}
export {qiuqiu}







