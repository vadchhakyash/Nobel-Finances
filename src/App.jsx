import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import ServicesPage from "./components/pages/ServicesPage/ServicesPage";
import BookingPage from "./components/pages/BookingPage/BookingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Booking" element={<BookingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
