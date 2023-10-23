import React, { useEffect } from 'react';
import css from './Contacts.module.css';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.phonebook}>
      <h1 className={css.phn}>Phonebook</h1>
      <ContactsForm />
      <h2 className={css.phn2}>Contacts</h2>
      <p className={css.find}>Find contacts by name</p>
      <Filter />
      {isLoading && !isError && (
        <p style={{ marginTop: '15px', fontSize: '18px', marginLeft: '30px', color: 'blue' }}>
          Request in progress...
        </p>
      )}
      <ContactList />
    </div>
  );
};
