import React, { useState } from 'react';
import { useStateValue } from './StateProvider';
import './MessageSender.css';

// Firebase
import db from './firebase';
import firebase from 'firebase';

// Materialize
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideocamIcon from '@material-ui/icons/Videocam';
import { Avatar } from '@material-ui/core';

function MessageSender(){

    const [ { user }, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        // Add post to firebase
        //serverTimeStamp - time is evaluted on server(automates process for conflicting timezones)
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })

        // Clear fields after submission
        setInput("");
        setImageUrl("");
    }


    return(
        <div className="messageSender">
        {/* Input fields */}
            <div className="messageCenter__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                    className="messageCenter__input"
                    onChange={e => setInput(e.target.value)}
                    placeholder={`What is on your mind ${user.displayName} ?`}
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