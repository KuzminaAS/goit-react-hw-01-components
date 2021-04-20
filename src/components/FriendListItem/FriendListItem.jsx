import React from 'react';

import PropTypes from "prop-types";

function FriendListItem({id, avatar, name, isOnline }) {
    return (
<li class="item" key={id} >
{/* <span className = {isOnline? online : offline } >{isOnline}</span> */}
 <span class="status">{isOnline}</span> 
  <img class="avatar" src={avatar} alt="" width="48" />
   <p class="name">{name}</p>
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