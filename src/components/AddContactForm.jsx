import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    if (contacts.find(contact => contact.name === name))
      alert(`${name} is already in contacts`);
    else dispatch(addContact({ name, number }));
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="title-form">Phonebook</h2>
      <div className="form-border">
          <span className="title">Name:</span>
      <input className="input" type="text" name="name" placeholder="name"/>
      <span className="title">Number:</span>
      <input className="input" type="tel" name="number" placeholder="number"/>
      <button className="btn" type="submit">
        Add contact
      </button>
      </div>
    </form>
  );
};
