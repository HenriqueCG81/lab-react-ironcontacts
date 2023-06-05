import React from 'react';

const ContactTable = ({ contacts, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt="" />
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar ? '🏆' : ''}</td>
            <td>{contact.wonEmmy ? '🏆' : ''}</td>
            <td>
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
