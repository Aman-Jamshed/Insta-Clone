import React from 'react'
import './Post.css';
import Avatar from "@material-ui/core/Avatar";

function post({ username, caption, imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar 
              className="post__avatar"
              alt='AmanJamshed'
              src="/static/images/avatar/1.jpg"
            />
            <h3>{username}</h3>
            </div>

            <img className="post__image"
             src={imageUrl} alt=""/>

            <h4 className="post__text"><strong>{username} </strong>{caption}</h4>

            
        </div>
    )
}

export default post

// https://clipground.com/images/react-logo-png-7.png