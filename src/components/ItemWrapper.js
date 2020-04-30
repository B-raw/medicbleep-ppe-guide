import React from 'react';
import ItemBlock from './ItemBlock';

function ItemWrapper(props) {
  console.log(props)

  return (
    <div>
      <h2>PPE Overview</h2>
      {/* Iterate over each ppe_item in props and create a ItemBlock */}
      {props.ppe_items.map(item => {
        console.log(item)
        return <ItemBlock name={item.fields.name} key={item.id}/>
      })}
    </div>

  );

}

export default ItemWrapper;
