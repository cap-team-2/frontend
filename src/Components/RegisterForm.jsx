// RegisterForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineCheck } from "react-icons/hi";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { auth, provider  } from "../fireBase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import axios from "axios"


const API = import.meta.env.VITE_APP_API_URL;

export default function RegisterForm() {
  const [registration, setRegistration] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    type: "buyer",
  });

  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  // Function to update the form state with every change for login form
  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setRegistration({ ...registration, [id]: value });
  };

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, registration.email, registration.password)
    .then((userCredential) => {
        console.log(userCredential);
    })
    .catch((error) => {
        console.log(error);
    });
    axios.post(`${API}/users`, registration)
    .then(() => {
      console.log(registration)
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    })
  };

  function google() {
    signInWithPopup(auth, provider)
    .catch((error) => {
      alert(error);
    });
    navigate("/");
  }

  // Function that toggles the passwordType from 'password' to 'text' creating a show password effect
  const togglePassword = (type) => {
    type === "password" ? setPasswordType("text") : setPasswordType("password");
  };

  return (
    <div className="h-full w-full flex justify-center items-center z-50">
      <div className="w-96">
        <h1 className="text-2xl font-semibold mb-4">Create a Free Account</h1>
        <div className="flex gap-2 mb-8">
          <p>Already have an account?</p>
          <Link
            className="text-blue-dark underline underline-offset-4 hover:text-blue-light"
            to={"/login"}
          >
            Log In
          </Link>
        </div>
        <form noValidate className="group">
          <div className="grid gap-2 relative">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              value={registration.first_name}
              onChange={handleFormChange}
              className="peer h-12 border placeholder:text-[#5a5a5a]  pl-4 outline-none ease-in-out duration-500 focus:ring focus:border-blue-light"
              // pattern={`^[A-Za-z'-]+$`}
              required
            />
            <p className="text-xs text-[red] peer-placeholder-shown:peer-invalid:invisible peer-invalid:visible peer-valid:invisible peer-focus:invisible">
              Please enter your first name
            </p>
            <HiOutlineCheck className="absolute peer-placeholder-shown:!invisible peer-invalid:invisible peer-valid:visible top-[45px] right-2 text-green-dark text-xl" />
          </div>
          <div className="grid gap-2 relative">
            <label htmlFor="last_name" className="mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              value={registration.last_name}
              onChange={handleFormChange}
              className="peer h-12 border placeholder:text-[#5a5a5a] pl-4 outline-none ease-in-out duration-500 focus:ring  focus:border-blue-light"
              // pattern="^[A-Za-z'-]+$"
              required
            />
            <p className="text-xs text-[red] invisible peer-placeholder-shown:peer-invalid:invisible peer-focus:invisible peer-invalid:visible">
              Please enter your last name
            </p>
            <HiOutlineCheck className="absolute peer-placeholder-shown:!invisible peer-invalid:invisible peer-valid:visible top-[54px] right-2 text-green-dark text-xl" />
          </div>
          <div className="grid gap-2 relative">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="yourname@domain.com"
              value={registration.email}
              onChange={handleFormChange}
              className="peer h-12 border placeholder:text-[#5a5a5a] pl-4 outline-none ease-in-out duration-500 focus:ring focus:border-blue-light"
              required
            />
            <p className="text-xs text-[red] peer-placeholder-shown:peer-invalid:invisible invisible peer-invalid:visible peer-focus:invisible">
              Please enter a valid email
            </p>
            <HiOutlineCheck className="absolute peer-placeholder-shown:!invisible peer-invalid:invisible peer-valid:visible top-[54px] right-2 text-green-dark text-xl" />
          </div>
          <div className="grid gap-2 relative">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              className="peer h-12 border placeholder:text-[#5a5a5a] pl-4 outline-none focus:ring ease-in-out duration-500 focus:border-blue-light"
              onChange={handleFormChange}
              value={registration.password}
              type={passwordType}
              id="password"
              maxLength={40}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
              required
            />
            <p className="text-xs text-[red] peer-placeholder-shown:peer-invalid:invisible invisible peer-invalid:visible peer-focus:invisible">
              Password must contain at least 8 characters, including one
              uppercase letter, one lowercase letter, and one digit.
            </p>
            <AiOutlineEye
              className={`absolute top-11 right-10 text-2xl cursor-pointer ${
                passwordType === "text" ? "visible" : "invisible"
              }`}
              onClick={() => togglePassword("text")}
            />
            <AiOutlineEyeInvisible
              className={`absolute top-11 right-10 text-2xl cursor-pointer ${
                passwordType === "password" ? "visible" : "invisible"
              }`}
              onClick={() => togglePassword("password")}
            />
            <HiOutlineCheck className="absolute peer-placeholder-shown:!invisible peer-invalid:invisible peer-valid:visible top-[45px] right-2 text-green-dark text-xl" />
          </div>
          <div className="grid text-center gap-2 text-sm">
            <button
              onClick={signUp}
              className="rounded-md h-12 bg-blue-light font-light group-invalid:pointer-events-none group-invalid:cursor-default group-invalid:opacity-60 cursor-pointer"
            >
              Create My Account
            </button>
            <p>or</p>
            <button
              onClick={google}
              className="border border-[#e2e2e2] rounded-md h-10 mb-2 font-medium flex justify-center items-center gap-2"
            >
              <FcGoogle size={24} /> Sign up with Google
            </button>
            <button
              onClick={signUp}
              className="border bg-black text-white rounded-md h-12 ease-in-out duration-300 hover:bg-opacity-60"
            >
              Sign up with Facebook
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}