
import react, { useState } from "react"
import NavItemes from "./NavItems";
import logo from "./orion_logo-removebg-preview.png"
import "./nav.css"
const navItemsList = ["Home", "About Us", "Products", "Services", "Contact Us"]
function Nav() {
    const [collapsed, setCollapse] = useState(true)
    function showCollapsed() {
        setCollapse(!collapsed)

    }
    return (
        <div className="Nav">
                <img src={logo} alt="logo" />
               

            <div className="navItemsDiv">
                {navItemsList.map((item, i) => {
                    return <NavItemes name={item} key={i} />
                })}
            </div>
            <div className={collapsed ? "iconContainer" : ""}>
                <i onClick={showCollapsed} className="fa-solid fa-bars navIcon" ></i>
                <div className={` slide ${!collapsed ? "notCollapsed slideShow" : "collapsed"}`}>
                    {navItemsList.map((item, i) => {
                        return <NavItemes name={item} key={i} />
                    })}
                </div>
            </div>
        </div>

    );
}

export default Nav;