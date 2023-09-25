// SellerProfile.jsx

import React from "react";
import { useState } from "react";
import SellerCard from "./sellerCard/SellerCard";

export default function SellerProfile({ seller }) {
    const [bio, setBio] = useState("");
    const [pictures, setPictures] = useState([])
    const [inventory, setInventory] = useState([])
    const [newItem, setNewItem] = useState("");
    const [editBio, setEditBio] = useState(false)
    const [editInventory, setEditInventory] = useState(false)
    const [editingIndex, setEditingIndex] = useState(null);


    const handleBioChange = (event) => {
        setBio(event.target.value)
    }
    const handleEditBio = () => (
        setEditBio(!editBio)
    )
    const handleAddPictures = (event) => {
        const file = event.target.files[0];
        if (file) {
            const newPictures = [...pictures, URL.createObjectURL(file)];
            setPictures(newPictures);
        }
    }
    const handleNewItemChange = (event) => {
        setNewItem(event.target.value)
    }
    const handleAddItem = () => {
        if (newItem.trim() !== "") {
            setInventory([...inventory, newItem]);
            setNewItem("");
        }
    };
    const handleEditClick = () => {
        setEditInventory(false);
    }
    const handleEditItem = (index) => {
        setEditingIndex(index);
    };
    const handleEditItemChange = (e) => {
        const updatedInventory = [...inventory];
        updatedInventory[editingIndex] = e.target.value;
        setInventory(updatedInventory);
    };

    const handleSaveEdit = (index) => {
        setEditingIndex(null);
    };
    // const reviews = [{}]
    return (
        <div key={seller.id} className="seller-profile">
            <div className="seller-bio">
                <h2>Biography</h2>
                <SellerCard key={seller.id} seller={seller} />

                {editBio ? (<textarea value={bio} onChange={handleBioChange} />
                ) : (
                    <p>{bio}</p>
                )}
                <button onClick={handleEditBio} className="edit-button">{editBio ? "Save Bio" : "Edit Bio"}</button>


                <div className="farm-pictures">
                    <h2> Farm Pictures</h2>
                    {pictures.map((picture, index) => (
                        <img key={index} src={picture} alt={`Farm Picture ${index + 1}`} />
                    ))}
                    <input type="file" accept="image/*" onChange={handleAddPictures} />
                    <button onClick={handleAddPictures} className="edit-button">Add Pictures</button>
                </div>
                <div className="inventory">
                    <h2>Inventory</h2>

                    {inventory.map((item, index) => (
                        <div key={index}>
                            {editInventory && editingIndex === index ? (
                                <div>
                                    <input
                                        type="text"
                                        value={item}
                                        onChange={(e) => handleEditItemChange(e, index)}
                                    />
                                    <button onClick={() => handleSaveEdit(index)}>Save</button>
                                </div>
                            ) : (
                                <div>
                                    {item}
                                    <button onClick={() => handleEditItem(index)}>Edit</button>
                                </div>
                            )}
                        </div>
                    ))}

                    <button onClick={handleAddItem} className="add-inventory">Add Inventory</button>
                    <input
                        type="text"
                        value={newItem}
                        onChange={handleNewItemChange}
                    />
                    <button onClick={handleEditClick}>Edit Inventory</button>
                </div>
            </div>
            <div className="reviews">
                <h2> Reviews</h2>
                {/* {reviews.map((reviews, index) => (
                    <div key={index} className="review">

                    </div>
                ))} */}
            </div>

        </div>
    )
}