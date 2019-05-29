import axios from 'axios';

// constant value that should NOT be changed
const KEY = 'AIzaSyB6kmzWeuzi6xLit8SSCmQjQBy3p2Y3CVY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet', 
        maxResults: 5,
        key: KEY
    }
}); 
