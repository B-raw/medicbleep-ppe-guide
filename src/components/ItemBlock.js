import React from 'react';

const ItemBlock = (props) => {
  const { name } = props;

  return (
    <div>
      <h4>{name}</h4>
    </div>
  )
}

export default ItemBlock;
