import PropTypes from 'prop-types';
import css from './Friends.module.css';

export default function Friendlist({ friends }) {
  return (
    <div>
      <ul className={css.friendlist}>
        {friends.map(friend => (
          <li className={css.item} key={friend.id}>
            {friend.isOnline ? (
              <span className={css.status}></span>
            ) : (
              <span className={css.statusOff}></span>
            )}

            <img
              className={css.avatar}
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
Friendlist.propTypes = {
  friends: PropTypes.array.isRequired,
};
