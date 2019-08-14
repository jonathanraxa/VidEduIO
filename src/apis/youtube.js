import axios from 'axios';
import { KEYCODE } from '../apis/keys';


// constant value that should NOT be changed

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet', 
        maxResults: 10,
        key: KEYCODE.youtube
    }
}); 
