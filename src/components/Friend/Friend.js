import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

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
            <Link to={'/friend/' + id}>Show Details</Link>
            <button onClick={showFriendDetails}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;