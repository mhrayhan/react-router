import React from 'react';
import {useNavigate} from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate();

    const showFriendDetails = () => {
        const path = `/friend/${id}` 
        navigate(path);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={showFriendDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;