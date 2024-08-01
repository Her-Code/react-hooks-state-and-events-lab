// import React from "react";

// function Item({ name, category }) {
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

// export default Item;

// src/components/Item.js
import React, { useState } from 'react';

function Item({ name }) {
  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setInCart(prevState => !prevState);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {name}
      <button onClick={handleClick}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
