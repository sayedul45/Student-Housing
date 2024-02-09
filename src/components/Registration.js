import React, { useState } from 'react';
import './RegistrationStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Registration() {
    const [section, setSection] = useState(1);
    const [formData, setFormData] = useState({
        // Initialize the state with your form data fields
        name: '',
        bod: '',
        email:'',
        mobile:'',
        occupation:'',
        idType:'',
        idNo:'',
        issueAuthor:'',
        state:'',
        date:'',
        expDate:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        // Send a POST request to your backend to store the data
        try {
            const response = await fetch("http://localhost:8003/apply-now", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const d = await response.json();
            if (response.status===501) {
                console.log('Data stored successfully.');
                toast.success("Registration successfully", { position: "top-center" });

                // Add logic to navigate or display a success message
            } else {
                console.error('Failed to store data.');
                toast.warn("Please fill all the required field", { position: "top-center" })
                // Handle errors
            }
        } catch (error) {
            console.error('Error:', error);
            toast.warn("Error Occured", { position: "top-center" })
            // Handle network errors
        }
    };

    // Function to handle moving to the next section
    const moveToNextSection = () => {
        setSection(section + 1);
    }
    return (
        <div className='style'>
            <div className="container">
                <header>Registration</header>
                <form onSubmit={handleSubmit}>
                    {
                        section === 1 ? (
                            <div className="form first">
                                <div className="details personal">
                                    <span className="title">Personal Details</span>
                                    <div className="fields">
                                        <div className="input-field">
                                            <label>Full Name</label>
                                            <input type="text" placeholder="Enter your name" name='fullname' onChange={handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label>Date of Birth</label>
                                            <input type="date" placeholder="Enter birth date" name='bod' onChange={handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label>Email</label>
                                            <input type="text" placeholder="Enter your email" name='email' onChange={handleChange}/>
                                        </div>
                                        <div className="input-field">
                                            <label>Mobile Number</label>
                                            <input type="number" placeholder="Enter mobile number"  name='mobile' onChange={handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label>Gender</label>
                                            <select required>
                                                <option disabled selected>Select gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Others</option>
                                            </select>
                                        </div>
                                        <div className="input-field">
                                            <label>Occupation</label>
                                            <input type="text" placeholder="Enter your ocupation" name='occupation' onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="details ID">
                                    <span className="title">Identity Details</span>
                                    <div className="fields">
                                        <div className="input-field">
                                            <label>ID Type</label>
                                            <input type="text" placeholder="Enter ID type" name='idType' onChange={handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label>ID Number</label>
                                            <input type="number" placeholder="Enter ID number" name='idNo' onChange={handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label>Issued Authority</label>
                                            <input type="text" placeholder="Enter issued authority" name='issueAuthor' onChange={handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label>Issued State</label>
                                            <input type="text" placeholder="Enter issued state" name='state' onChange={handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label>Issued Date</label>
                                            <input type="date" placeholder="Enter your issued date" name='date' onChange={handleChange} />
                                        </div>
                                        <div className="input-field">
                                            <label>Expiry Date</label>
                                            <input type="date" placeholder="Enter expiry date" name='expDate' onChange={handleChange} />
                                        </div>
                                    </div>
                                    <button className="nextBtn" >
                                        <span className="btnText">Submit</span>
                                        <i className="fa-solid fa-forward"></i>
                                    </button>
                                </div>
                            </div>
                        ) : <div className="form second">
                        {/* <div className="details address">
                            <span className="title">Address Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>Address Type</label>
                                    <input type="text" placeholder="Permanent or Temporary" required />
                                </div>
                                <div className="input-field">
                                    <label>Nationality</label>
                                    <input type="text" placeholder="Enter nationality" required />
                                </div>
                                <div className="input-field">
                                    <label>State</label>
                                    <input type="text" placeholder="Enter your state" required />
                                </div>
                                <div className="input-field">
                                    <label>District</label>
                                    <input type="text" placeholder="Enter your district" required />
                                </div>
                                <div className="input-field">
                                    <label>Block Number</label>
                                    <input type="number" placeholder="Enter block number" required />
                                </div>
                                <div className="input-field">
                                    <label>Ward Number</label>
                                    <input type="number" placeholder="Enter ward number" required />
                                </div>
                            </div>
                        </div>
                        <div className="details family">
                            <span className="title">Family Details</span>
                            <div className="fields">
                                <div className="input-field">
                                    <label>Father Name</label>
                                    <input type="text" placeholder="Enter father name" required />
                                </div>
                                <div className="input-field">
                                    <label>Mother Name</label>
                                    <input type="text" placeholder="Enter mother name" required />
                                </div>
                                <div className="input-field">
                                    <label>Grandfather</label>
                                    <input type="text" placeholder="Enter grandfther name" required />
                                </div>
                                <div className="input-field">
                                    <label>Spouse Name</label>
                                    <input type="text" placeholder="Enter spouse name" required />
                                </div>
                                <div className="input-field">
                                    <label>Father in Law</label>
                                    <input type="text" placeholder="Father in law name" required />
                                </div>
                                <div className="input-field">
                                    <label>Mother in Law</label>
                                    <input type="text" placeholder="Mother in law name" required />
                                </div>
                            </div>
                            <div className="buttons">
                                <div className="backBtn">
                                    <i className="uil uil-navigator"></i>
                                    <span className="btnText">Back</span>
                                </div>

                                <button className="sumbit">
                                    <span className="btnText">Submit</span>
                                    <i className="uil uil-navigator"></i>
                                </button>
                            </div>
                        </div> */}
                    </div>}
                   
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}
