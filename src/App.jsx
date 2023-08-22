// App.jsx

// DEPENDENCIES
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// PAGES
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";

function App() {


  return (
    <main>
      <Router>
        <h2>PANTRI</h2>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"*"} element={<FourOFour />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App
