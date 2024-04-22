// Home component - Covering the Search Bar + Video list + Rendered video

import React from 'react';
import SearchBar from './SearchBar'; 
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoRender from './VideoRender';

// Defining a class-based component Home
class Home extends React.Component {
    state = {
        videos: [], // State to hold the list of videos fetched from YouTube
        selectedVideo: null // State to hold the currently selected video
    }

    // handle form submission from the SearchBar component
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        // console.log("this is resp", response);
        
    };
    // handle the selection of a video from the VideoList component
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div style={{marginTop: '1em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div>
                    <div>
                        <div style={{marginTop: '1em'}}>
                            <VideoRender video={this.state.selectedVideo}/>
                        </div>
                        <div>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;