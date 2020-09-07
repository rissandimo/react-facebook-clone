import React, { useState, useEffect } from 'react';
import Post from './Post';
import db from './firebase';

import './Feed.css';

// Components
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';

function Feed(){

    const [posts, setPosts] = useState([]);

    /* 
    Run once Feed has loaded
     use posts collection in firebase
     onSnapshot() - once anything updated/modifid in collection -> changes push to app
    */
    useEffect( () => {
        db.
        collection('posts').
        orderBy('timestamp', 'desc').
        onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => 
                ({id: doc.id, data: doc.data() }))))
            );
    }, []) // Empty bracket -> execute this function only once

    return(
        <div className='feed'>
                <StoryReel />
                <MessageSender />

                {posts.map(post => (
                    <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                    />
                ))}
        </div>
    );
}

export default Feed;