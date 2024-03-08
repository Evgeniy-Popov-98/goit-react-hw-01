import clsx from 'clsx';
import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(css.frendItem)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css.frendName)}>{name}</p>
      {isOnline ? (
        <p className={clsx(css.frendItemInfoTrue)}>Online</p>
      ) : (
        <p className={clsx(css.frendItemInfoFalse)}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
