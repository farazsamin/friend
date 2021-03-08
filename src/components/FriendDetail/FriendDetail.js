import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {id} = useParams();
    const [friend, setFriend] = useState([])
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setFriend(data))
    },[])
    const {name,email} = friend;
    return (
        <div>
            <h2>{id}</h2>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    );
};

export default FriendDetail;