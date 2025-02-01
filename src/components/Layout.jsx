import { Link } from "react-router-dom";

export const Layout = ({ children }) => (
    <div className="nav-header bg-white shadow-xs border-0">
        <div className="nav-top">
            <Link to="/">
                <i className="feather-zap text-success display2-size me-3 ms-0"></i>
                <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0 mr-2">
                    Sociala.
                </span>
            </Link>
        </div>
        {children}
    </div>
);