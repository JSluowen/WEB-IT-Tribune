import base from '@/api/base'
import axios from '@/http/http'
import qs from 'qs'

const user = {
  // 用户注册
  userRegister(params) {
    return new Promise((resolve, reject) => {
      axios.post(`${base.userRegister}`, qs.stringify(params)).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error.data)
      })
    })
  },
  // 用户登录
  userLogin(params) {
    return new Promise((resolve, reject) => {
      axios.post(`${base.userLogin}`, qs.stringify(params)).then((res) => {
        resolve(res.data)
      }).catch((error) => {
        reject(error.data)
      })
    })
  },
  // 用户上传头像
  fileavatarimg(params) {
    return new Promise((resolve, reject) => {
      axios.post(`${base.fileavatarimg}`, params, {
        headers: {
          'Conent-Type': 'multipart/form-data',
        }
      }).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
  // 用户完善个人信息

}

export default user
