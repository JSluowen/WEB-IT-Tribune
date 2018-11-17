import base from '@/api/base'
import axios from '@/http/http'
import qs from 'qs'

const user ={
    userRegister(params){
        return new Promise((resolve,reject)=>{
            axios.post(`${base.userRegister}`,qs.stringify(params)).then((res)=>{
                resolve(res.data)
            }).catch((error)=>{
                reject(error.data)
            })
        })
    },
    userLogin(params){
        return new Promise((resolve,reject)=>{
            axios.post(`${base.userLogin}`,qs.stringify(params)).then((res)=>{
                resolve(res.data)
            }).catch((error)=>{
                reject(error.data)
            })
        })
    }
}

export default user