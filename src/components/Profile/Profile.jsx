import React from 'react';

import PropTypes from "prop-types";

import './Profile.css';

const Profile = ({ avatar, name, tag, location,stats}) => {

    return (<div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">{name}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>)
};

export default Profile;

Profile.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg'
}


Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,

  stats: PropTypes.shape({
    followers:PropTypes.number.isRequired,
    views:PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,

  })
}