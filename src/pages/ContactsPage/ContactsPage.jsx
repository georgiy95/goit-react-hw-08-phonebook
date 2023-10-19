import CSS from './Contacts.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from 'services/operations';
import { getLoadingValue } from 'redux/contactsSlice';
import { getFilterValue, selectContactsList } from 'redux/filterSlice';
import Card from 'components/Card/Card';
import Filter from 'components/Filter/Filter';
import NotFound from 'components/NotFound/NotFound';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Contacts = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(selectContactsList);
  const isLoading = useSelector(getLoadingValue);
  const filterValue = useSelector(getFilterValue);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contactsList.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleDeleteContact = id => {
    Confirm.show(
      'Deleteing Confirm',
      'This contact will be deleted!',
      'Yes',
      'No',
      () => {
        dispatch(deleteContact(id));
        Notify.success(`The contact has been deleted!`, { clickToClose: true });
      }
    );
  };

  const hasContacts = contactsList.length > 0;

  return (
    <>
      <Filter />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        hasContacts && (
          <ul className={CSS.contacts}>
            <Card
              handleDeleteContact={handleDeleteContact}
              filteredContacts={filteredContacts}
            />
          </ul>
        )
      )}

      {!isLoading && !hasContacts && <NotFound />}
    </>
  );
};

export default Contacts;
