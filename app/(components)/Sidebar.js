import { useState } from "react";
import { GrDocumentText } from "react-icons/gr";
import Image from "next/image";
import { Nav } from "react-bootstrap";
import { FaHome, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import logoImg from "@/app/assets/zing-logo.png";

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Function to toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div
      className="d-flex flex-column p-3 text-white"
      style={{ height: "100vh", minWidth: "250px" }}
    >
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar_header">
          {!sidebarOpen && (
            <Image src={logoImg} alt="Avatar" width={90} height={50} />
          )}

          <button className="toggle_button" onClick={toggleSidebar}>
            {sidebarOpen ? (
              // If sidebar is open, show left arrow icon
              <FaChevronLeft />
            ) : (
              // If sidebar is closed, show right arrow icon
              <FaChevronRight />
            )}
          </button>
        </div>
        <Nav className="flex-column nav_menu">
          <Nav.Link href="/" className="nav_menu">
            <FaHome />
            {!sidebarOpen && <span className="nav_text">Dashboard</span>}
          </Nav.Link>
          <Nav.Link href="/favpayee" className="nav_menu">
            <GrDocumentText className="nav_icon" />
            {!sidebarOpen && <span className="nav_text"> Fav Payee</span>}
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
