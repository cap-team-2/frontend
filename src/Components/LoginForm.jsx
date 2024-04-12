// LoginForm.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, provider } from "../fireBase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { HiOutlineCheck } from "react-icons/hi";
import logo from "../assets/logo-dark.png";


// const API = import.meta.env.VITE_APP_API_URL;

export default function LoginForm() {
    const [login, setLogin] = useState({ 
        email: "",
        password: "", 
    });

    const [passwordType, setPasswordType] = useState('password');

    const navigate = useNavigate();

    // Function that toggles the passwordType from 'password' to 'text' creating a show password effect
    const togglePassword = (type) => {
      type === 'password' ? setPasswordType('text') : setPasswordType('password');
    }

    // Function to update the form state with every change for login form
    const handleFormChange = (event) => {
        const { id, value } = event.target;
        setLogin({...login, [id]: value });
    }

    //  Function to handle submitting the form when all fields are filled out correctly
    const logIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, login.email, login.password)
        .then((userCredential) => {
          navigate("/products");
          console.log(userCredential);
        })
        .catch((error) => {
          console.log(error);
          alert("Wrong Email or Password!");
        });
    }

    function google() {
      signInWithPopup(auth, provider)
      .catch((error) => {
        alert(error);
      });
      navigate("/products");
    }

    return (
      <div className="bg-[#BFDCBC] h-full w-full flex justify-center pt-[10%]">
        <div className="h-[600px] w-[500px] px-8 bg-white rounded flex flex-col items-center">
          <img src={logo} alt="Pantri Logo" className="h-32 w-32" />
          <div className="flex flex-col items-center gap-2 mb-2 w-full">
            <div className="flex w-full justify-around">
              <Link className="w-40 text-center font-semibold border-b-2 border-green text-green p-2">Log in</Link>
              <Link
                className="w-40 font-semibold opacity-50 p-2 text-center hover:text-green hover:opacity-100"
                to={"/register"}
              >
                Create account
              </Link>
            </div>
            <h2 className="text-2xl text-green font-semibold m-2">Welcome back!</h2>
          </div>
          <form id="login" className="grid gap-2 mb-8 relative">
            <div className="grid gap-2">
              <input
                placeholder="Email address"
                className="peer h-12 border rounded placeholder:text-[#5a5a5a] pl-4 outline-none ease-in-out duration-500 focus:ring focus:ring-green-light invalid:border-b-2 invalid:border-b-[red] focus:border-green-light "
                onChange={handleFormChange}
                value={login.email}
                type="email"
                id="email"
              />
              <p className="text-xs text-[red] invisible peer-invalid:visible peer-focus:invisible">
                Please enter a valid email
              </p>
              <HiOutlineCheck className="absolute peer-placeholder-shown:!invisible peer-invalid:invisible peer-valid:visible top-3.5 right-2 text-green-dark text-xl" />
            </div>
            <div className="grid relative">
              <input
                placeholder="Password"
                className="peer h-12 border rounded placeholder:text-[#5a5a5a] pl-4 outline-none focus:ring focus:ring-green-light ease-in-out duration-500 invalid:border-b-2 invalid:border-b-[red] focus:border-green-light"
                onChange={handleFormChange}
                value={login.password}
                type={passwordType}
                id="password"
                maxLength={40}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
              />
              <p className="text-xs text-[red] invisible mt-1 peer-invalid:visible peer-focus:invisible">
                Password must contain at least 8 characters, including one
                uppercase letter, one lowercase letter, and one digit.
              </p>
              <AiOutlineEye
                className={`absolute top-3 right-10 text-2xl cursor-pointer text-green ${
                  passwordType === "password" ? "visible" : "invisible"
                }`}
                onClick={() => togglePassword("password")}
              />
              <AiOutlineEyeInvisible
                className={`absolute top-3 right-10 text-2xl cursor-pointer text-green ${
                  passwordType === "text" ? "visible" : "invisible"
                }`}
                onClick={() => togglePassword("text")}
              />
              <HiOutlineCheck className="absolute peer-placeholder-shown:!invisible peer-invalid:invisible peer-valid:visible top-3.5 right-2 text-green-dark text-xl" />
              {/* link to reset page-need to add reset page** */}
              <Link
                to="/reset"
                className="text-green hover:underline underline-offset-4 place-self-center"
              >
                {" "}
                Forgot your password?
              </Link>
            </div>
            <div className="grid text-center mt-4 gap-2 text-sm">
              <button
                onClick={logIn}
                className="rounded-md h-12 bg-green bg-opacity-70 hover:bg-opacity-90 font-bold cursor-pointer text-white"
              >
                Log In
              </button>
              <p>or</p>
              <button
                onClick={google}
                className="border border-green-light rounded-md h-12 mb-2 font-medium flex justify-center items-center gap-2 hover:border-green"
              >
                <FcGoogle size={24} /> Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}
