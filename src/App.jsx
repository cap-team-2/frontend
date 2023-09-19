// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// PAGES
import Browse from "./Pages/Browse";
import FarmersMarkets from "./Pages/FarmersMarkets";
import Products from "./Pages/Products";
import FourOFour from "./Pages/FourOFour";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import Market from "./Pages/Market";
import Nav from "./Components/Nav";
import Register from "./Pages/Register";
import Vendors from "./Pages/Vendors";
function App() {


  return (
    <main className="h-full w-full">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/market" element={<Market />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/farmers-markets" element={<FarmersMarkets />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App
