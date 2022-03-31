import React from 'react';

const Friend = (props) => {
    const {name, username} = props.friend;
    return (
        <div>
            <p>Name: {name}</p>
            <button>{username}</button>
        </div>
    );
};

export default Friend;