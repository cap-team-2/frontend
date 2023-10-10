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
    <div className="max-w-md mx-auto p-2">
    <h1 className="text-xl font-semibold mb-2">Checkout</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Cardholder Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-600">
          Shipping Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
  
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
          Card Number
        </label>
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
          className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
        <div className='grid grid-cols-2 gap-x-10'>
        <div className="mb-4">
          <label htmlFor="ExpireMonth" className="block text-sm font-medium text-gray-600">
            Expire Month
          </label>
          <input
            type="month"
            id="ExpireMonth"
            name="ExpireMonth"
            value={formData.ExpireMonth}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
    
        <div className="mb-4 ">
          <label htmlFor="CVC" className="block text-sm font-medium text-gray-600">
            CVC
          </label>
          <input
            type="password"
            maxLength="3"
            id="CVC"
            name="CVC"
            value={formData.CVC}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
        type="submit"
        className="bg-blue-500 text-green font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Place Order
      </button>
      </div>
    </form>
  </div>
  
  );
}

export default CheckoutForm;
