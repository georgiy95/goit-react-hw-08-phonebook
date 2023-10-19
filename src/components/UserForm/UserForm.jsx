import CSS from './UserForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'services/operations';
import { selectContactsList } from 'redux/filterSlice';
import { selectIsLoggedIn, selectToken } from 'redux/contactsSlice';
import { Notify } from 'notiflix';
import { Link } from 'react-router-dom';

const UserForm = () => {
  const contactList = useSelector(selectContactsList);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  //state for adding contact values
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleStateChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleAddUser = e => {
    e.preventDefault();

    if (!token) {
      Notify.warning('Please register first', {
        clickToClose: true,
      });
      setName('');
      setNumber('');
      return;
    }

    if (
      contactList.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      Notify.warning(`${name} is already in contacts`, { clickToClose: true });
      setName('');
      setNumber('');
      return;
    }

    dispatch(addContact({ name, number }));
    Notify.success(`${name} has been added!`, { clickToClose: true });
    setName('');
    setNumber('');
  };

  return (
    <>
      {!isLoggedIn ? (
        <div className={CSS.greeting}>
          <h1>Welcom to phonebook App</h1>
          <Link className={CSS.warningLink} to="/login">
            Please login for adding new contacts
          </Link>
        </div>
      ) : (
        <p>Add new contact</p>
      )}

      <form
        action=""
        autoComplete="off"
        className={CSS.userForm}
        onSubmit={handleAddUser}
      >
        <label htmlFor="formNameInput" className={CSS.userForm__label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([\-][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="formNameInput"
          className={CSS.userForm__input}
          value={name}
          onChange={handleStateChange}
        />

        <label htmlFor="formNumberInput" className={CSS.userForm__label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[\\-.\\s]?\(?\d{1,3}?\)?[\\-.\\s]?\d{1,4}[\\-.\\s]?\d{1,4}[\\-.\\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="formNumberInput"
          className={CSS.userForm__input}
          value={number}
          onChange={handleStateChange}
        />

        <button type="submit" className={CSS.userForm__btn}>
          Add Contact
        </button>
      </form>
    </>
  );
};

export default UserForm;
