import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://curriculum-6563e.firebaseio.com'
})

export default instance