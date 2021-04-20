import React from 'react';

import PropTypes from "prop-types";

import FriendListItem from '../FriendListItem';

import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    

    const allFriends = friends.map(({ id, ...props }) => <FriendListItem {...props} />);
        
    return (
    <>
     <section className= {styles.section}>
    <ul className={styles.friend_list}>
        {allFriends}
    </ul>
    </section>
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
