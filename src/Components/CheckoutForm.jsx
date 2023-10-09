import React, { useState } from 'react';

function CheckoutForm({setThanks}) {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    ExpireMonth: '',
    CVC: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setThanks(true)
    // You can handle the form submission logic here, such as sending data to a server or performing client-side validation.
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">CardHolder Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Shipping Address</label>
        <input
          type="text"
          id="address"
          name="address"
          rows="4"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="tel"
          inputMode="numeric"
          id="cardNumber"
          name="cardNumber"
          pattern="[0-9\s]{13,19}"
          autoComplete="cc-number"
          maxLength="19"
          placeholder="xxxx xxxx xxxx xxxx"
          value={formData.cardNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="ExpireMonth">Expire Month</label>
        <input
          type="month"
          id="ExpireMonth"
          name="ExpireMonth"
          value={formData.ExpireMonth}
          onChange={handleChange}
          required
        />

        <label htmlFor="CVC">CVC</label>
        <input
          type="password"
          maxLength="3"
          id="CVC"
          name="CVC"
          value={formData.CVC}
          onChange={handleChange}
          required
        />

        {/* <label htmlFor="payment">Payment Method</label>
        <select
          id="payment"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="credit-card">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select> */}

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
