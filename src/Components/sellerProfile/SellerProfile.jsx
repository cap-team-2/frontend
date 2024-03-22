/* eslint-disable react/prop-types */
// SellerProfile.jsx
import React from "react";
import { useState, useEffect } from "react";

import './SellerProfile.css';

export default function SellerProfile({ seller }) {
    if (!seller) {
        return null;
    }

    const [bio, setBio] = useState("");
    const [pictures, setPictures] = useState([])
    const [inventory, setInventory] = useState([])
    const [newItem, setNewItem] = useState("");
    const [editBio, setEditBio] = useState(false)
    // const [editInventory, setEditInventory] = useState(false)
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
    const reviews = [{}]

    return (
        <div className="entire-page-container">
            <div className="left-panel">
                <div className="profile-card">
                    <div className="left-card-side">
                        <img src={seller.image} alt="User Avatar" className="profile-image" />
                        <h3>{seller.first_name}</h3>
                        <p className="farmer-title">Farmer</p>
                    </div>
                    <div className="right-card-side">
                        <div className="right-side-card-info-top">
                            <p className="review-number">11</p>
                            <p className="review-title">Reviews</p>
                        </div>
                        <div className="right-side-card-info-bottom">
                            <p className="member-number">8yrs</p>
                            <p className="member-title">Membership</p>
                        </div>

                    </div>
                </div>
                <div className="profile-info-card">
                    <h2>{seller.first_name} confirmed information</h2>
                    <div className="checkbox-container">
                        <p className="sustainable">&#10003;Sustainable Farm</p>
                        <p className="organic">&#10003;Certified Farm</p>
                        <p className="address">&#10003; Address</p>
                        <p className="email">&#10003; Email address</p>
                        <p className="phone">&#10003; Phone number</p>
                    </div>

                </div>
            </div>

            <div className="right-panel">
                <div className="right-panel-top">
                    <div className="right-panel-top-about">
                        <h1 className="about"> About {seller.first_name}</h1>
                        <button className="edit-button">
                            <span className="button-title">Edit profile</span>
                        </button>
                        <div className="seller-details">
                            <p className="birth-year">
                                <span className="icon balloon"></span>
                                Year of Birth
                            </p>
                            <p className="job-description">
                                <span className="icon briefcase"></span>
                                Years farming
                            </p>
                            <p className="languages">
                                <span className="icon chat-bubble"></span>
                                Languages Spoken
                            </p>
                            <p className="location">
                                <span className="icon map"></span>
                                {seller.city}
                            </p>
                        </div>
                    </div>
                    <div className="right-panel-top-about-details">
                        <div className="right-panel-top-about-details-p">
                            <div className="info-row">
                                <div className="icon farm-size"></div>
                                <p>Farm size</p>
                            </div>
                            <div className="info-row">
                                <div className="icon favorite-produce"></div>
                                <p>Favorite product</p>
                            </div>
                            <div className="info-row">
                                <div className="icon additional-details"></div>
                                <p>Additional Details</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-panel-bottom">
                    <div className="right-panel-bottom-title">
                        <hr />
                        <h2>What are Buyers saying about {seller.first_name}</h2>
                    </div>
                    <div className="right-panel-bottom-carrot">
                        <div>
                            <button className="carrot-button">&#9658;</button>
                        </div>
                    </div>

                </div>

                <div>

                    <div className="right-panel-bottom-review-card-container">
                        <div className="right-panel-bottom-review-card">
                            <div className="right-panel-bottom-review-card-1">
                                <div className="reviewer-info">
                                <p className="review"> I enjoyed the fresh vegetables.</p>
                                    <img src="https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="Jessica" />
                                    <p className="reviewer-name">Jessica</p>
                                </div>
                            </div>
                            <div className="right-panel-bottom-review-card">
                                <div className="right-panel-bottom-review-card-2">
                                    <p className="review"> Every thing was fresh and organic</p>
                                    <div className="reviewer-info">
                                        <img src="https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/ab48139b-8026-44e6-a043-c24ddc3782c6/2022-05-12-Brooke+Johnson-1052.jpg?format=500w" alt="Karen" />
                                        <p className="reviewer-name">Karen</p>
                                    </div>
                                </div>

                                <div className="right-panel-bottom-review-card-3">
                                    <p className="review"> The tour was great!</p>
                                    <div className="reviewer-info">
                                        <img src="https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/6d0d06ce-e8a5-434e-a633-a4893841b6a3/2022-08-10-Trinet-Henderson-Tiara-1485.jpg?format=500w" alt="Roam" />
                                        <p className="reviewer-name">Emma</p>
                                    </div>

                                </div>
                                <div className="right-panel-bottom-review-card-4">
                                    <p className="review"> Seeing the animals raom free was relieving.</p>
                                    <div className="reviewer-info">
                                        <img src="https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/da52fbea-abb9-4a9e-94b8-f68ad42069d4/2022-09-16-Alaia-Azarcon-0130.jpg?format=500w" alt="Michelle" />
                                        <p className="reviewer-name">Michelle</p>
                                    </div>

                                </div>

                                <div className="right-panel-bottom-review-card-5">
                                    <p className="review"> Review here</p>
                                    <div className="reviewer-info">
                                        <img src="https://images.squarespace-cdn.com/content/v1/5c90ea00ca525b6d1d4d7509/1676226459078-ASMJWGT8B3C2HOS4W8VD/2022+D_Edwards0594_B.jpg?format=500w" alt="Asher" />
                                        <p className="reviewer-name">Asher</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="right-panel-bottom-review-inventory-container">
                            <hr />
                            <h1>Inventory</h1>

                            <div className="right-panel-bottom-inventory">
                                <div className="right-panel-bottom-inventory-card-1">
                                    <div className="inventory-info">
                                        <img src="https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg" alt="cookie" />
                                        <p className="inventory-name">Cookie</p>
                                    </div>
                                </div>

                                <div className="right-panel-bottom-inventory-card-2">
                                    <div className="inventory-info">
                                        <img src="https://images.unsplash.com/photo-1563252722-6434563a985d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8enVjY2hpbml8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Zucchini" />
                                        <p className="inventory-name">Zucchini</p>
                                    </div>

                                </div>
                                <div className="right-panel-bottom-inventory-card-2">
                                    <div className="inventory-info">
                                        <img src="https://www.grandturkishbazaar.com/wp-content/uploads/2019/01/turkish-honeycomb.jpg" alt="Honey Comb" />
                                        <p className="inventory-name">Honey Comb</p>
                                    </div>

                                </div>
                                <div className="right-panel-bottom-inventory-card-2">
                                    <div className="inventory-info">
                                        <img src="https://i.ebayimg.com/images/g/UcEAAOSwmBhiRvQX/s-l960.png" alt="Duck eggs" />
                                        <p className="inventory-name">Duck eggs</p>
                                    </div>

                                </div>
                                <div className="right-panel-bottom-inventory-card-3">
                                    <div className="inventory-info">
                                        <img src="https://images.unsplash.com/photo-1620417981458-1c9990f17b45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80%27" alt="raspberry" />
                                        <p className="inventory-name">Raspberry</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div >
    )
}