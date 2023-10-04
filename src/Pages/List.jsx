import { useContext, useState } from "react";

import { UserContext } from "../Providers/UserProvider";

import "./List.css"

export default function List() {
  const [items,setItems]=useState([])
  const [newItem,setNewItem]=useState({itemName:'',itemQuantity:'',});
  
  const addItemToList = () => {
    if (newItem.itemName && newItem.itemQuantity) {
      setItems([...items, newItem]);
      setNewItem({ itemName: '', itemQuantity: '' });


      // make a post call to back end to save this item
          // if successful
            //  setItems([...items, newItem]);
            // setNewItem({ itemName: '', itemQuantity: '' });
          // if error
            // show error message
    } 
  }
  
  const toggleItemCheck = (index) => {
      const updatedItems = [...items];
      updatedItems[index].isChecked = !updatedItems[index].isChecked;
      setItems(updatedItems);
  };

   const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const clearList = () => {
    setItems([]);
  };

   const listItems = items.map((item, index) => (
    <div key={index} className="list__item">
      <input
        type="checkbox"
        checked={item.isChecked}
        onChange={() => toggleItemCheck(index)}
      />
      <div className="list__item-name">{item.itemName}</div>
      {/* <input
        type="text"
       
        value={item.itemName}
        onChange={(e) => {
          const updatedItems = [...items];
          updatedItems[index].itemName = e.target.value;
          setItems(updatedItems);
        }}
      /> */}
      <input
        type="number"
        className="list__item-qty"
        value={item.itemQuantity}
        onChange={(e) => {
          const updatedItems = [...items];
          updatedItems[index].itemQuantity = e.target.value;
          setItems(updatedItems);
        }}
      />
      <div className="list__item-delete" onClick={() => deleteItem(index)}>
        <span role="img" aria-label="Delete" style={{ cursor: 'pointer' }}>
          🗑
        </span>
      </div>
    </div>
  ));

  return (
    <div className="list">
      <div className="list__header">
        <div className="list__title">My List</div>
        <button onClick={clearList}>Clear List</button>
      </div>

      <div className="list__add-item">
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.itemName}
          onChange={(e) => setNewItem({ ...newItem, itemName: e.target.value })}
        />
        <input
          type="number"
          placeholder="Item Quantity"
          value={newItem.itemQuantity}
          onChange={(e) => setNewItem({ ...newItem, itemQuantity: e.target.value })}
        />
        <button onClick={addItemToList}>Add Item</button>
      </div>
      <div className="list__items">
        {listItems}
      </div>
    </div>
  );
}

//     return (
//         <div className="list">
//             <h1>My List</h1>
//             <div className="list__items">
//                 <div className="list__item">
//                     <input type="checkbox"/>
//                     <div className="list__item-name">
//                         apple
//                     </div>
//                     <div className="list__item-qty">
//                         3
//                     </div>
//                   <div className="list__item-delete" onClick={() => deleteItem(index)}>
//                         <span role="img" aria-label="Delete" style={{ cursor: 'pointer' }}>
//                         🗑
//                     </span>
//                      </div>
//                 </div>
//                 <div className="list__item">
//                     <input type="checkbox"/>
//                     <div className="list__item-name">
//                         cabbage

//                     </div>
//                     <div className="list__item-qty">
//                         1
//                     </div>
//                     <div className="list__item-delete">
//                         🗑 
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }