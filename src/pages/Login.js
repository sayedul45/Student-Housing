import React, { useState } from "react";
import './LoginStyle.css';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

function Login() {
    const navigate = useNavigate()
    const [inpval, setINP] = useState({
        email: "",
        password: ""

    });

    const setdata = (e) => {


        const { name, value } = e.target;

        setINP(() => {

            return {
                ...inpval,
                [name]: value
            }
        })
    };

    const sendData = async (e) => {

        e.preventDefault();

        const { email, password } = inpval;

        const res = await fetch("http://localhost:8003/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Accept: "application/json",
                // "Access-control-Allow-Origin": "*",
            },
            body: JSON.stringify({ email, password })
        });


        const data = await res.json();
        // console.log(data);

        if (res.status === 400) {
            toast.warn("😒fill all the data", { position: "top-center" })
        }
        else if (!data) {
            toast.warn("invalid details ", { position: "top-center" })
        }
        else {
            // window.alert("data successfully Added");
            toast.success("😍login successfully", { position: "top-center" });

            navigate('/')
            setINP({
                ...inpval,
                email: "",
                password: ""
            });
        }

    }

    // const [email, setEmail] = useState()
    // const [password, setPassword] = useState()
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:8003/signin', { email, password }).then(result => console.log(result)).catch(err => console.log(err))
    // }

    return (
        <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
            <div className="form_container p-5 rounded bg-white">
                <form method="POST">
                    <h3 className="text-center">Sign In</h3>
                    <div className="mb-2">
                        <label htmlFor="email" className="mb-1 fw-bold text-black bg-white">Email</label>
                        <input type="text" placeholder="Enter your email" className="form-control" name='email' onChange={setdata} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="mb-1 fw-bold text-black bg-white">Password</label>
                        <input type="password" placeholder="Enter password" name="password" className="form-control" onChange={setdata} />
                    </div>
                    <div className="mb-2">
                        <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                        <label htmlFor="check" className="custom-input-label  mb-1 fw-bold text-black bg-white">Remember me</label>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={sendData}>Sign in</button>
                    </div>
                    <p className="text-right mt-3">
                        Forgot <a href="">Password?</a>
                    </p>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Login;