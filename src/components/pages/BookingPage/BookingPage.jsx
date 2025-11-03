import "../../../App.css";
import NavBar from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";
import BookingSection from "../../templets/BookingTemplets/Booking";

function BookingPage() {
  return (
    <div className="w-full">
      <NavBar />
      <BookingSection/>
      <Footer />
    </div>
  );
}

export default BookingPage;