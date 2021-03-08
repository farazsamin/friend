import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name,email,id} = props.friend;
    return (
        <div className="friend-info text-center">
            <h2>Name : {name}</h2>
            <p >Email : {email}</p>
            <p><Link to={`/friend/${id}`}>Show Friend Detail</Link></p>
        </div>
    );
};

export default Friend;