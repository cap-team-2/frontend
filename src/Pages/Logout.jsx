// Logout.jsx

import { auth } from "../firebase/fireBase.js";

export default function Logout () {

    return (
        <div>
            <h2>Are you sure you want to log out?</h2>
            <button>Log Out</button>
            <button>Cancel</button>
        </div>
    )
}
