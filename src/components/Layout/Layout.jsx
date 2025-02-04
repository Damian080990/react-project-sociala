import { Fragment,useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Notifications } from "../Notifications/Notifications";
import PropTypes from "prop-types"
import { SideNavigation } from "./SideNavigation";
// definiujemy tablice navlinks

const navLinks = [
    { title: "Home", to: "/", icon: "feather-home" },
    { title: "Stories", to: "/defaultstorie", icon: "feather-zap" },
    { title: "Videos", to: "/defaultvideo", icon: "feather-video" },
    { title: "Groups", to: "/defaultgroup", icon: "feather-user" },
    { title: "Shop", to: "/shop2", icon: "feather-shopping-bag" },
];



export const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false); /* STAN do isOpen*/

    const toggleOpen = () => setIsOpen((prevIsOpen) => !prevIsOpen) /* sprawdzamy czy poprzedni stan jest open i odwrotnie */

    const buttonClass = `${isOpen ? "active" : ""}`;

    const navClass = `${isOpen ? "nav-active" : ""}`

    return (
    <Fragment>
        <div className="nav-header bg-white shadow-xs border-0">
            <div className="nav-top">
                <Link to="/">
                    <i className="feather-zap text-success display2-size me-3 ms-0"></i>
                    <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0 mr-2">
                        Sociala.
                    </span>
                </Link>

                 {/* Mobile Menu */}

          <Link
            to="/defaultmessage"
            className="mob-menu ms-auto me-2 chat-active-btn"
          >
            <i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i>
          </Link>
          <Link to="/defaultvideo" className="mob-menu me-2">
            <i className="feather-video text-grey-900 font-sm btn-round-md bg-greylight"></i>
          </Link>
          <span
         //   onClick={toggleActive}
            className="me-2 menu-search-icon mob-menu"
          >
            <i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i>
          </span>
          <button
            onClick={toggleOpen}
            className={`nav-menu me-0 ms-2 ${buttonClass}`}
          />

          {/* /Mobile Menu */}
            </div>

            <form action="#" className="float-left header-search ms-3">
                <div className="form-group mb-0 icon-input">
                    <i className="feather-search font-sm text-grey-400"></i>
                    <input
                        type="text"
                        placeholder="Start typing to search.."
                        className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"
                    />
                </div>
            </form>
            {/* DESKTOP MENU */}
            {navLinks.map((navLink) => (
                <NavLink
                    key={navLink.title} // unikatowy klucz dla metody MAP dla kazdego elementu - IMPORTANT -MUSI BYĆ NA KAZDYM RAZEM
                    activeclassname="active"
                    to={navLink.to}
                    className="p-2 text-center ms-0 menu-icon center-menu-icon"
                >
                    <i
                        className={`${navLink.icon} font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500`}
                    />
                </NavLink>
            ))}

            <Notifications />

            {/* DESKTOP MENU */}
            <Link
                to="/defaultmessage"
                className="p-2 text-center ms-3 menu-icon chat-active-btn"
            >
                <i className="feather-message-square font-xl text-current"></i>
            </Link>

            <Link to="defaultsettings" className="p-0 ms-3 menu-icon">
                <img src="assets/images/user.png" alt="user" className="w40 mt--1" />
            </Link>

            <SideNavigation navClass={navClass}/>

        </div>
        {children}
    </Fragment>
)};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};