import base from '@/api/base'
import axios from '@/http/http'
import qs from 'qs'

class file {
  fileavatarimg(params) {
    
    return new Promise((resolve, reject) => {
      axios.post(`${base.fileavatarimg}`, {
        params,
        headers: {
          'Conent-Type': 'multipart/form-data'
        }
      }).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
export default  file
