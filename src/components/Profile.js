import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Profile.module.css';

function Profile({ avatar, name, tag, location, stats }) { 
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
    
      <ul className={styles.stats}>
        <li className={styles.element}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.element}>
          <span className={styles.label}>Views</span>
                  <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.element}>
          <span className={styles.label}>Likes</span>
                  <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  title:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}

export default Profile;