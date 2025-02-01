import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Notifications } from "./Notifications";

// definiujemy tablice navlinks

const navLinks = [
    { title: "Home", to: "/", icon: "feather-home" },
    { title: "Stories", to: "/defaultstorie", icon: "feather-zap" },
    { title: "Videos", to: "/defaultvideo", icon: "feather-video" },
    { title: "Groups", to: "/defaultgroup", icon: "feather-user" },
    { title: "Shop", to: "/shop2", icon: "feather-shopping-bag" },
];

const feedElements = [
    { title: "Newsfeed", to: "/", icon: "feather-tv", color: "blue" },
    { title: "Badges", to: "/defaultbadge", icon: "feather-award", color: "red" },
    {
        title: "Explore Stories",
        to: "/defaultstorie",
        icon: "feather-globe",
        color: "gold",
    },
    {
        title: "Popular Groups",
        to: "/defaultgroup",
        icon: "feather-zap",
        color: "mini",
    },
    {
        title: "Author Profile",
        to: "/userpage",
        icon: "feather-user",
        color: "primary",
    },
];

const morePages = [{
    title: 'Email Box', to: '/defaultemailbox', icon: 'feather-inbox', count: 584
},
{
    title: 'Near Hotel', to: "/defaulthotel", icon: 'feather-home', count: 0
},
{
    title: 'Latest Event', to: '/defaultevent', icon: 'feather-map-pin', count: 0
},
{
    title: 'Live Stream', to: '/defaultlive', icon: 'feather-youtube', count: 0
},
];

export const Layout = ({ children }) => (
    <Fragment>
        <div className="nav-header bg-white shadow-xs border-0">
            <div className="nav-top">
                <Link to="/">
                    <i className="feather-zap text-success display2-size me-3 ms-0"></i>
                    <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0 mr-2">
                        Sociala.
                    </span>
                </Link>
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
                    activeClassName="active"
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

            {/* Side Navigation */}
            <nav className={`navigation scroll-bar`}>
                <div className="container ps-0 pe-0">
                    <div className="nav-content">
                        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                            <div className="nav-caption fw-600 font-xssss text-grey-500">
                                <span>New </span>Feeds
                                <ul className="mb-1 top-content">
                                    {feedElements.map((feedElement) => (
                                        <li key={feedElement.to}>
                                            <Link
                                                to={feedElement.to}
                                                className="nav-content-bttn open-font"
                                            >
                                                <i
                                                    className={`${feedElement.icon} btn-round-md bg-${feedElement.color}-gradiant me-3`}
                                                />
                                                <span>{feedElement.title}</span>
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>

                        {/* More Pages */}
                        <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                            <div className="nav-caption fw-600 font-xssss text-grey-500">
                                <span>More </span>Pages
                            </div>
                            <ul className="mb-3">
                                {morePages.map((morePage) => (
                                    <li key={morePage.to}>
                                        <Link
                                            to={morePage.to}
                                            className="nav-content-bttn open-font"
                                        >
                                            <i className={`font-xl text-current ${morePage.icon} me-3`} />
                                            <span>{morePage.title}</span>
                                            {morePage.count !== 0 && <span className="circle-count bg-warning mt-1">{morePage.count}</span>}
                                        </Link>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        {/* More Pages */}

                    </div>
                </div>
            </nav>
            {/* /Side Navigation */}

        </div>
        {children}
    </Fragment>
);