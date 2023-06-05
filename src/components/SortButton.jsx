import React from 'react';

const SortButton = ({ text, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default SortButton;
