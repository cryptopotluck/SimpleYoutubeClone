import React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos, handleVideoSelect}) =>{
    const renderedList = videos.map((video) => {
        return <VideoItem
            key={video.id.videoId}
            handleVideoSelect={handleVideoSelect}
            video={video}
        />
    });

        return (
            <div>
                {renderedList}
            </div>
        )
    };


export default VideoList;