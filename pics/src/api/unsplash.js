import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID Lbr76JDsnk-F3evT7d5VCbLQQqdLiWQ4aPnrBQk7dpY'
    }
});