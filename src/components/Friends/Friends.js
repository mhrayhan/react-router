import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data));
    }, [])
    return (
        <div>
            <h2>Hello from frinds</h2>
            <h2><small>parle kicu tk dar dis</small></h2>
            <p>{friends.length}</p>
            {
                friends.map(friend => <Friend 
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
            }
        </div>
    );
};

export default Friends;