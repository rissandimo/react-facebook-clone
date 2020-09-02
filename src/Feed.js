import React from 'react';

import Post from './Post';

import './Feed.css';

// Components
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

function Feed(){
    return(
        <div className='feed'>
                <StoryReel />
                <MessageSender />

                <Post
                    profilePic='https://randomuser.me/api/portraits/men/20.jpg'
                    message='post message'
                    timestamp='this is the timestamp'
                    username='johnny'
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR41h2_Pwm38IrC0mLS902LB9jTqw2xYVt0ZA&usqp=CAU'
                     />
                <Post
                    profilePic="https://randomuser.me/api/portraits/women/72.jpg"
                    message="2nd post message"
                    timestamp="this is a timestamp"
                    username="jessicaxoxo" />
                <Post />
        </div>
    );
}

export default Feed;