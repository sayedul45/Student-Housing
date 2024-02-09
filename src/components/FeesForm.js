import React, { useState } from 'react';
import './FeesFormStyle.css';
import payment from "../Images/card_img.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function FeesForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        hallOfResidence: '',
        address: '',
        city: '',
        zipCode: '',
        nameOnCard: '',
        creditCardNumber: '',
        expMonth: '',
        expYear: '',
        reference: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8003/fees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.status === 200) {
                    // Form submitted successfully, handle success 
                    toast.success("form submitted successfully",{position:"top-center"})
                    console.log('Form submitted successfully');
                } else {
                    // Form submission failed, handle error 
                    toast.success("form submitted successfully",{position:"top-center"})
                    console.error('Form submission failed');
                }
            })
            .catch((error) => {
                // Handle network or other errors here
                console.error('Error:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <>

            <div className="contain">
                <form onSubmit={handleSubmit}>
                    <div className="row">

                        <div className="col">

                            <h3 className="title">Student Data</h3>

                            <div className="inputBox">
                                <span>Full Name :</span>
                                <input type="text" placeholder="Enter your name" name="fullName" value={formData.fullName} onChange={handleInputChange} />
                            </div>
                            <div className="inputBox">
                                <span>Email :</span>
                                <input type="email" placeholder="Enter your edu-mail" name="email" value={formData.email} onChange={handleInputChange} />
                            </div>
                            <div className="inputBox">
                                <span>Hall of Residence :</span>
                                <select required name='hallOfResidence' value={formData.hallOfResidence} onChange={handleInputChange}>
                                    <option disabled selected>Select Your Residence</option>
                                    <option name="hallOfResidence" value={'Bhall'}>Bangabandhu Hall</option>
                                    <option name="hallOfResidence" value={'Nhall'}>Nazul Islam Hall</option>
                                    <option name="hallOfResidence" value={'Dhall'}>Dhirendranath Datta Hall</option>
                                    <option name="hallOfResidence" value={'Fhall'}>Faizunnessa Hall</option>
                                    <option name="hallOfResidence" value={'Shall'}>Sheikh Hasina Hall</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <span>Address :</span>
                                <input type="text" placeholder="room - street - locality" name="address" value={formData.address} onChange={handleInputChange} />
                            </div>

                            <div className="flex">
                                <div className="inputBox">
                                    <span>City :</span>
                                    <input type="text" placeholder="Enter Your City" name="city" value={formData.city} onChange={handleInputChange} />
                                </div>
                                <div className="inputBox">
                                    <span>Zip code :</span>
                                    <input type="text" placeholder="123 456" name="zipCode" value={formData.zipCode} onChange={handleInputChange} />
                                </div>
                            </div>

                        </div>

                        <div className="col">

                            <h3 className="title">Payment</h3>

                            <div className="inputBox">
                                <span>Cards accepted :</span>
                                <img src={payment} alt="nothing here" />
                            </div>
                            <div className="inputBox">
                                <span>Name on card :</span>
                                <input type="text" placeholder="Enter name on card" name="nameOnCard" value={formData.nameOnCard} onChange={handleInputChange} />
                            </div>
                            <div className="inputBox">
                                <span>Credit card number :</span>
                                <input type="number" placeholder="1111-2222-3333-4444" name='creditCardNumber' value={formData.creditCardNumber} onChange={handleInputChange} />
                            </div>
                            <div className="inputBox">
                                <span>Exp month :</span>
                                <select required>
                                    <option disabled selected>Choose Month</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>January</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>February</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>March</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>April</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>May</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>June</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>July</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>August</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>September</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>October</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>November</option>
                                    <option name="expMonth" value={formData.expMonth} onChange={handleInputChange}>December</option>
                                </select>
                            </div>

                            <div className="flex">
                                <div className="inputBox">
                                    <span>Exp year :</span>
                                    <input type="number" placeholder="2023" name="expYear" value={formData.expYear} onChange={handleInputChange} />
                                </div>
                                <div className="inputBox">
                                    <span>Reference :</span>
                                    <input type="text" placeholder="1234" name="reference" value={formData.reference} onChange={handleInputChange} />
                                </div>
                            </div>

                        </div>

                    </div>

                    <input type="submit" value="proceed to checkout" className="submit-btn" />

                </form>
                <ToastContainer/>

            </div>
        </>
    );
}

export default FeesForm;