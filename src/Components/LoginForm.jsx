// LoginForm.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { HiOutlineCheck } from "react-icons/hi";

// const API = import.meta.env.VITE_APP_API_URL;

export default function LoginForm() {
    const [login, setLogin] = useState({ 
        email: "",
        password: "", 
    });

    const [passwordType, setPasswordType] = useState('password');

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
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
      <div className="bg-white h-full w-full flex justify-center items-center pb-40">
        <div className="h-96 w-96">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <div className="flex gap-2 mb-8">
            <p>New?</p>
            <Link
              className="text-blue-dark underline underline-offset-4 hover:text-blue-light"
              to={"/register"}
            >
              Create an Account
            </Link>
          </div>
          <form className="grid gap-4 mb-8 relative">
            <div className="grid gap-2">
              <label htmlFor="email">Email Address</label>
              <input
                placeholder="yourname@domain.com"
                className="peer h-12 border placeholder:text-[#5a5a5a] pl-4 outline-none ease-in-out duration-500 focus:ring invalid:border-b-2 invalid:border-b-[red] focus:border-blue-light "
                onChange={handleFormChange}
                value={login.email}
                type="email"
                id="email"
              />
              <p className="text-xs text-[red] invisible peer-invalid:visible peer-focus:invisible">
                Please enter a valid email
              </p>
              <HiOutlineCheck className="absolute peer-placeholder-shown:!invisible peer-invalid:invisible peer-valid:visible top-[45px] right-2 text-green-dark text-xl" />
            </div>
            <div className="grid gap-2 relative">
              <label htmlFor="password">Password</label>
              <input
                placeholder="Password"
                className="peer h-12 border placeholder:text-[#5a5a5a] pl-4 outline-none focus:ring ease-in-out duration-500 invalid:border-b-2 invalid:border-b-[red] focus:border-blue-light"
                onChange={handleFormChange}
                value={login.password}
                type={passwordType}
                id="password"
                maxLength={40}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
              />
              <p className="text-xs text-[red] invisible peer-invalid:visible peer-focus:invisible">
                Password must contain at least 8 characters, including one
                uppercase letter, one lowercase letter, and one digit.
              </p>
              <AiOutlineEye
                className={`absolute top-11 right-10 text-2xl cursor-pointer ${
                  passwordType === "password" ? "visible" : "invisible"
                }`}
                onClick={() => togglePassword("password")}
              />
              <AiOutlineEyeInvisible
                className={`absolute top-11 right-10 text-2xl cursor-pointer ${
                  passwordType === "text" ? "visible" : "invisible"
                }`}
                onClick={() => togglePassword("text")}
              />
              <HiOutlineCheck className="absolute peer-placeholder-shown:!invisible peer-invalid:invisible peer-valid:visible top-[45px] right-2 text-green-dark text-xl" />
            </div>
            <div className="grid text-center gap-2 text-sm">
              <button
                onClick={handleSubmit}
                className="rounded-md h-12 bg-blue-light bg-opacity-70 font-light cursor-default"
              >
                Log In
              </button>
              <p>or</p>
              <button
                onClick={handleSubmit}
                className="border border-[#e2e2e2] rounded-md h-10 mb-2 font-medium flex justify-center items-center gap-2"
              >
                <FcGoogle size={24} /> Sign in with Google
              </button>
              <button
                onClick={handleSubmit}
                className="border bg-black text-white rounded-md h-12 ease-in-out duration-300 hover:bg-opacity-60"
              >
                Sign in with Facebook
              </button>
            </div>
          </form>
          {/* link to reset page-need to add reset page** */}
          <Link
            to="/reset"
            className="text-blue-dark underline underline-offset-4 hover:text-blue-light"
          >
            {" "}
            Forgot your password?
          </Link>
        </div>
      </div>
    );
}