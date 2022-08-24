import LoginDark from "./components/Login/LoginDark";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App__container">

        <Routes>
            <Route path="/" element={<LoginDark />}>

            </Route>
            <Route path="/Main" element={<Main/>}>

            </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
