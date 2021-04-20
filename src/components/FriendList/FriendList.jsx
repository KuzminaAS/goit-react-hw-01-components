import React from 'react';

import './FriendList.css';

import PropTypes from "prop-types";

import FriendListItem from '../FriendListItem';

const FriendList = ({ friends }) => {
    

    const allFriends = friends.map(({ id, ...props }) => <FriendListItem {...props} />);
        
    return (
     <>
    <ul class="friend-list">
        {allFriends}
    </ul>
    </>
    )
}

export default FriendList;

FriendList.propTypes = {

    friends: PropTypes.arrayOf(
        PropTypes.shape({
    id: PropTypes.number.isRequired,
    
    avatar: PropTypes.string.isRequired,
    
    name: PropTypes.string.isRequired,

    isOnline: PropTypes.string.isRequired,
        }
        )
    )
    
}
