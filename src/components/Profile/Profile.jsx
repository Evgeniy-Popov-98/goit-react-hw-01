import clsx from 'clsx';
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.mainboxCardUser)}>
      <div className={clsx(css.boxUserCard)}>
        <img className={clsx(css.userImg)} src={image} alt="User avatar" />
        <p className={clsx(css.titleInfoCard)}>{name}</p>
        <p className={clsx(css.textInfoCard)}>@{tag}</p>
        <p className={clsx(css.textInfoCard)}>{location}</p>
      </div>
      <ul className={clsx(css.cardList)}>
        <li className={clsx(css.cardItem)}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={clsx(css.cardItem)}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={clsx(css.cardItem)}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
