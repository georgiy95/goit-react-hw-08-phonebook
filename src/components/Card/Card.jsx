import CSS from './Card.module.css';
import { ImCross, ImPhone } from 'react-icons/im';
import PropTypes from 'prop-types';

const Card = ({ filteredContacts, handleDeleteContact }) => {
  return filteredContacts.map(({ name, id, number }) => (
    <li className={CSS.contacts__item} key={name} id={id}>
      <p>name: {name}</p>
      <p className={CSS.user__number}>
        <ImPhone className={CSS.iconMoon} />
        {number}
        <ImCross
          type="button"
          className={CSS.contacts__btn}
          onClick={() => handleDeleteContact(id)}
        ></ImCross>
      </p>
    </li>
  ));
};

Card.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default Card;
