import React from 'react';
import './VideoItem.css'

const VideoItem = ({video, handleVideoSelect}) =>{

        return (
            <div onClick={() => handleVideoSelect(video)} class="ui cards video-item">
                <div className="card">
                    <div className="image">
                        <img
                            alt={video.snippet.title}
                            src={video.snippet.thumbnails.medium.url}
                        />
                    </div>
                    <p>{video.snippet.title}</p>
                    <div className="extra">
                        Rating:
                        <div className="ui star rating" data-rating="2" ><i className="icon active"></i><i className="icon active"></i><i className="icon active"></i><i className="icon active"></i><i className="icon active"></i></div>
                    </div>
                </div>
            </div>

        )
    };


export default VideoItem;