import axios from 'axios';

const KEY = 'AIzaSyCjS3XtPMKm-ySM6BJBSEq-AKk_dyMwt6s';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})