import axios from 'axios'

const Api = axios.create({
    baseURL: ' http://3d60407a.ngrok.io'
})

export default Api