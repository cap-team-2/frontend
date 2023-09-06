// LoginForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API = import.meta.env.VITE_APP_API_URL;

export default function LoginForm() {
    const [login, setLogin] = useState({ 
        email: "",
        password: "", 
    });

    const [errorMsg, setErrorMsg] = useState("");

// Function to update the form state with every change for login form
    const handleFormChange = (event) => {
        const { id, value } = event.target;
        setLogin({...login, [id]: value });
    }
    return (
        <div className="bg-white h-full w-full flex justify-center items-center">
            <div className="h-96 w-72"> 
                <h1 className="text-xl font-semibold">Login</h1> 
                <div className="flex gap-2 mb-8">
                    <p>New?</p>
                    <Link className="text-blue-dark underline underline-offset-4 hover:text-blue-light" to={"/register"}>Create an Account</Link>
                </div>
                <form className="grid gap-4 mb-8">
                    <div className="grid gap-2">
                        <label htmlFor="email">
                            Email Address
                        </label>
                        <input  placeholder="yourname@domain.com"className=" h-12 border placeholder:text-[#5a5a5a] pl-4 caret-blue-dark"onChange={handleFormChange} value={login.email} type="text" id="email" required/>
                    </div>
                    <div className="grid gap-2">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input  placeholder="Password"className="h-12 border placeholder:text-[#5a5a5a] pl-4 caret-blue-dark"onChange={handleFormChange} value={login.password} type="text" id="password" required/>
                    </div>
                        <div className="grid text-center gap-2">
                            <button className="rounded-md h-12 bg-blue-light font-light">Log In</button>
                            <p>or</p>
                            <button className="border border-[grey] rounded-md h-12 font-light mb-2">Sign in with Google</button>
                            <button className="border bg-black text-white rounded-md h-12 ">Sign in with Facebook</button>
                        </div>
                </form>
                {/* link to reset page-need to add reset page** */}
                <Link to="/reset" className="text-blue-dark underline underline-offset-4 hover:text-blue-light" > Forgot your password?</Link>
            </div>
            
        </div>
    )
}