import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const SideNavigation = ({ navClass }) => {
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

    return (

        <nav className={`navigation scroll-bar ${navClass}`}>
            <div className="container ps-0 pe-0">
                <div className="nav-content">
                    <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                        <div className="nav-caption fw-600 font-xssss text-grey-500">
                            <span>New </span>Feeds

                        </div>
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
                                        {/* {morePage.count !== 0 ? <span className="circle-count bg-warning mt-1">{morePage.count}</span> : ""} */}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </div>

                </div>
            </div>
        </nav>

    )
}

SideNavigation.propTypes = {
    navClass: PropTypes.string.is
};