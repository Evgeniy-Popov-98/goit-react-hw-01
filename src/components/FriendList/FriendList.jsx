import FriendListItem from '../FriendListItem/FriendListItem';
import clsx from 'clsx';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(css.frendList)}>
      {friends.map(frend => {
        return (
          <li className={clsx(css.frendLi)} key={frend.id}>
            <FriendListItem
              key={frend.id}
              avatar={frend.avatar}
              name={frend.name}
              isOnline={frend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
