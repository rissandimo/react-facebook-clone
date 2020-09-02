import React, { useState } from 'react';

// Materialize
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';

import './MessageSender.css';
import { Avatar } from '@material-ui/core';

function MessageSender(){

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // Clear fields after submission
        setInput("");
        setImageUrl("");
    }


    return(
        <div className="messageSender">
        {/* Input fields */}
            <div className="messageCenter__top">
                <Avatar />
                <form>
                    <input
                    className="messageCenter__input"
                    onChange={e => setInput(e.target.value)}
                    placeholder="What is on your mind?"
                    value={input}
                    />
                    <input
                    placeholder="image URL (Optional)"
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl} />
                    <button onClick={handleSubmit} type="submit" >
                        Hidden submit
                    </button>
                </form>
            </div>
            {/* Icons */}
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: 'orange'}} />
                    <h3>Feeling Activity</h3>
                </div>
            </div>
        </div>
    );  
}

export default MessageSender;