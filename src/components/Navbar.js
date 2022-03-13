import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    let[activeTab,setActiveTab]=useState("/");
    let location=useLocation();
    useEffect(()=>{
        if(location.pathname==="/")
        {
            setActiveTab("/")
        }
        else if(location.pathname==="/add")
        {
            setActiveTab("/add");
        }
        else if(location.pathname==="/view")
        {
            setActiveTab("/view")
        }
        else if(location.pathname==="/edit")
        {
            setActiveTab("/edit")
        }
    },[location.pathname])

  return (
    <div className="nav-outer-conatiner">
      <nav className="nav-container">
        <h4 className="nav-logo">Leo Blogs</h4>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${activeTab==="/"?"active":""}`}>
            Home
          </Link>
          <Link to="/add" className={`nav-link ${activeTab==="/add"?"active":""}`}>
            Add
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
