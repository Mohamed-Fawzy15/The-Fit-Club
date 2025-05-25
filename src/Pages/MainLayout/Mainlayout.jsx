import { Outlet } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";

export default function Mainlayout() {
  return (
    <div className="App">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
