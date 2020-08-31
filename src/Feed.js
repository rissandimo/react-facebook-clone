import React from 'react';

import './Feed.css';

// Components
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

function Feed(){
    return(
        <div className='feed'>
                <StoryReel />
                <MessageSender />
        </div>
    );
}

export default Feed;