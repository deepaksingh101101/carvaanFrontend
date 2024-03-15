import React, { useState } from 'react';
import mastercard from '../../assets/checkOut/image 11.png';
import visa from '../../assets/checkOut/image 12.png';
import express from '../../assets/checkOut/image 14.png';
import discover from '../../assets/checkOut/image 13.png';

export default function Debit() {
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    billingZip: ''
  });

  const [isValid, setIsValid] = useState(false);
  const [cardType, setCardType] = useState('');

  const cardTypePrefixes = {
    'Mastercard': /^5[1-5]/,
    'Visa': /^4/,
    'American Express': /^3[47]/,
    'Discover': /^6(?:011|5)/
  };

  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    let matchedCardType = '';
    for (const [type, prefix] of Object.entries(cardTypePrefixes)) {
      if (prefix.test(value)) {
        matchedCardType = type;
        break;
      }
    }
    setCardType(matchedCardType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    // For example, you can check if required fields are filled
    if (
      formData.name.trim() === '' ||
      formData.cardNumber.trim() === '' ||
      formData.expiryMonth.trim() === '' ||
      formData.expiryYear.trim() === '' ||
      formData.cvv.trim() === '' ||
      formData.billingZip.trim() === ''
    ) {
      alert('Please fill out all fields.');
      return;
    }

    setIsValid(true);
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div className="row justify-content-center mb-4">
        <div className="col-lg-8">
          <div className=" cards mb-3 ms-3 d-flex mt-4">
            <div className=" rounded p-2 mx-1" style={{ background: '#F2F2F2' }}>
              <img src={mastercard} alt="" className="" />
            </div>
            <div className="rounded p-2 mx-1" style={{ background: '#F2F2F2' }}>
              <img src={visa} alt="" className="" />
            </div>
            <div className="rounded p-2 mx-1" style={{ background: '#F2F2F2' }}>
              <img src={express} alt="" className="" />
            </div>
            <div className="rounded p-2 mx-1" style={{ background: '#F2F2F2' }}>
              <img src={discover} alt="" className="" />
            </div>
          </div>

          <div className="mt-5 ms-3">
            <form id="payment-form" onSubmit={handleSubmit}>
              <div className="mb-3 ">
                <label htmlFor="name" className="form-label fw-medium">
                  Name on Card:
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  required
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {isValid && <span>&#10004;</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="card-number" className="form-label fw-medium">
                  Debit/Credit card number
                </label>
                <input
                  type="text"
                  id="card-number"
                  className="form-control"
                  required
                  onChange={(e) => {
                    setFormData({ ...formData, cardNumber: e.target.value });
                    handleCardNumberChange(e);
                  }}
                />
                {cardType && <span>&#10004; {cardType}</span>}
              </div>
              <div className="row mb-3">
                <label htmlFor="expiryMonth" className="form-label fw-medium">
                  Expiration Date
                </label>
                {isValid && <span>&#10004;</span>}
                <div className="col">
                  <select
                    id="expiryMonth"
                    className="form-select"
                    required
                    onChange={(e) => setFormData({ ...formData, expiryMonth: e.target.value })}
                  >
                  <option value="" selected disabled>Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                  {isValid && <span>&#10004;</span>}
                </div>
                <div className="col">
                  <select
                    id="expiryYear"
                    className="form-select"
                    required
                    onChange={(e) => setFormData({ ...formData, expiryYear: e.target.value })}
                  >
                  <option value="" selected disabled>Year</option>
                  <option value="2024">2024</option>
                  <option value="2024">2025</option>
                  <option value="2024">2026</option>
                  <option value="2024">2027</option>
                  <option value="2024">2028</option>
                  <option value="2024">2029</option>
                  <option value="2024">2030</option>

                  </select>
                  {isValid && <span>&#10004;</span>}
                </div>
              </div>

              <div className=" row mb-3 ">
                <div className="col">
                  <label htmlFor="cvv" className="form-label fw-medium">
                    Security Code:
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="form-control"
                    required
                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                  />
                  {isValid && <span>&#10004;</span>}
                </div>
                <div className="col">
                  <label htmlFor="billing-zip" className="form-label fw-medium ">
                    Billing Zip Code:
                  </label>
                  <input
                    type="text"
                    id="billing-zip"
                    className="form-control"
                    required
                    onChange={(e) => setFormData({ ...formData, billingZip: e.target.value })}
                  />
                  {isValid && <span>&#10004;</span>}
                </div>
              </div>
             
            </form>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
}
