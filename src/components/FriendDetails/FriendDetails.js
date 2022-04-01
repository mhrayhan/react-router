import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const {friendId} = useParams();

    const [friend, setFriend] = useState({})

    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`

    useEffect( ()=> {
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data));
        }, [])

    return (
        <div>
            <h2>Details about my Bondhu</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Email: {friend.email}</h4>
            <h4>Website: {friend.website}</h4>
            <h4>City: {friend.address?.city}</h4>
            <h4>Street: {friend.address?.street}</h4>
            <h4>lat: {friend.address?.geo?.lat}</h4>

        </div>
    );
};

export default FriendDetails;