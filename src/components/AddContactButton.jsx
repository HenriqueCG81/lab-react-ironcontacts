import React from 'react';

const AddContactButton = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return <button onClick={handleClick}>Add Random Contact</button>;
};

export default AddContactButton;
