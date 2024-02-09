import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Login";

function Signup() {
    const [inpval, setINP] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""

    })

    const setdata = (e) => {
        console.log(e.target.value);

        const { name, value } = e.target;

        setINP(() => {

            return {
                ...inpval,
                [name]: value
            }
        })
    }


    const sendData = async (e) => {

        e.preventDefault();

        const { fname, lname, email, password } = inpval;
        if (!fname || !lname || !email || !password) {
            toast.warn("Fill all the required data", { position: 'top-center' })
        }

        const res = await fetch("http://localhost:8003/sign-up", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-control-Allow-Origin": "*",
            },
            body: JSON.stringify({ fname, lname, email, password })
        });


        const data = await res.json();
        // console.log(data);

        if (res.status === 422 || !data) {
            toast.warn("⚠️ Please fill all the required field", { position: "top-center" })
        }
        else {
            // window.alert("data successfully Added");
            toast.success("✅ Registration successfully", { position: "top-center" });


            setINP({
                ...inpval,
                fname: "",
                lname: "",
                email: "",
                password: ""
            });
        }

    }


    return (
        <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white">
                <form method="POST">
                    <h3 className="text-center">Sign Up</h3>
                    <div className="mb-2">
                        <label htmlFor="fname" className="mb-1 fw-bold text-black bg-white">First Name</label>
                        <input type="text" name="fname" onChange={setdata} value={inpval.fname} placeholder="Enter First Name" className="form-control" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="lname" className="mb-1 fw-bold text-black bg-white">Last Name</label>
                        <input type="text" name="lname" onChange={setdata} value={inpval.lname} placeholder="Enter Last Name" className="form-control" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="mb-1 fw-bold text-black bg-white">Email</label>
                        <input type="email" name="email" onChange={setdata} value={inpval.email} placeholder="Enter your email" className="form-control" required />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="mb-1 fw-bold text-black bg-white">Password</label>
                        <input type="password" name="password" onChange={setdata} value={inpval.password} placeholder="Enter password" className="form-control" required />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary mt-1" onClick={sendData}>Sign Up</button>
                    </div>
                    <p className="text-right mt-2">
                        Already have an account.<Link to="/signin" className="ms-2">Sign in</Link>
                    </p>
                </form>

                <ToastContainer />
            </div>
        </div>
    )
}

export default Signup;