import React from 'react';
import PropTypes from 'prop-types';
import { BoxContacts, Li } from './ContactsList.styled';

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <BoxContacts>
      {contacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </Li>
      ))}
    </BoxContacts>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
