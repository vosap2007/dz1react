import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Friend.module.css';

function FriendList({ friends }) { 

    return (
        <ul className={styles.friendList}>

            {friends.map(friend =>
                <li className={styles.item} key={friend.id}>
                    <span className={friend.isOnline ? styles.online : styles.notOnline} >
                    </span>
                    <img className={styles.avatar}
                        src={friend.avatar}
                        alt={friend.name} />
                    <p className={styles.name}>{friend.name}</p>
                </li>
                )}
</ul>
  );
}

FriendList.defaultProps = {
    friends: null
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
}

export default FriendList;