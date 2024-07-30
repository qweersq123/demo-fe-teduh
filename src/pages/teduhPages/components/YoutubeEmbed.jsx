import React from 'react';

const YouTubeEmbed = ({ embedId }) => (
    <div className="video-responsive h-full">
        <iframe
            className='w-full object-cover h-[750px] max-lg:h-[600px] max-md:h-[500px] max-sm:h-[300px] rounded-lg'
            src={`${embedId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    </div>
);

export default YouTubeEmbed;
