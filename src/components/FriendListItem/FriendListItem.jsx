import React from 'react';

import PropTypes from "prop-types";

import styles from './FriendListItem.module.css';

function FriendListItem({id, avatar, name, isOnline }) {
    return (
        <li className={styles.item} key={id} >
        <span className = {isOnline? styles.online : styles.offline} >{isOnline}</span>
        <img className={styles.avatar}  src={avatar} alt="" width="48" />
        <p className={styles.name}>{name}</p>
        </li>
    )
};

export default FriendListItem;

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    
    avatar: PropTypes.string.isRequired,
    
    name: PropTypes.string.isRequired,

    isOnline: PropTypes.string.isRequired,

}