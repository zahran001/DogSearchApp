import axios from 'axios'; // Axios library for making HTTP requests

/*
Keeping for further reference:
GET https://www.googleapis.com/youtube/v3/search

Search: list
videos resource
snippet

*/

const API_KEY = 'AIzaSyDZIbkJ6_vQdmNk60bACpUzNY29jQQUtag';

const youtubeAPI = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/', // Base URL for the YouTube Data API
    params : {
        key: API_KEY, // API key required for accessing the YouTube Data API
        part: 'snippet', // specifies the part of the resource that the API response will include; snippet object contains basic details about the video
        maxResults: 10, // maximum number of items that should be returned in the result set
    },
});

export default youtubeAPI;



