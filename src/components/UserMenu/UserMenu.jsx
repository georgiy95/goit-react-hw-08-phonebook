import CSS from './UserMenu.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsValue } from 'redux/contactsSlice';
import { logOut } from 'services/operations';

const UserMenu = () => {
  const users = useSelector(getContactsValue);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={CSS.userMenu}>
      <div className={CSS.userMenu__container}>
        <BsFillPersonFill className={CSS.userIcon} />
        <span className={CSS.userMenu__name}>
          Welcom, <b>{users.name}</b>
        </span>
      </div>
      <button
        type="button"
        onClick={handleLogout}
        className={CSS.userMenu__btn}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
