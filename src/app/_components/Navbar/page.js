"use client"

import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [coursesDropdown, setCourseDropdown] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);
    const [pathName, setPathname] = useState("/");
    const [mobileMenu, setMobileMenu] = useState(false);

    const dropdownRef = useRef(null); // Ref for the dropdown
    const buttonRef = useRef(null); // Ref for the button
    const mobileMenuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setCourseDropdown(false); // Close dropdown
            // setMobileMenu(false);
        }
    };

    const handleMobileNavOutsideClick = (event) => {
        // Check if the click is outside the mobileNav
        if (
            mobileMenuRef.current &&
            !mobileMenuRef.current.contains(event.target)
        ) {
            setMobileMenu(false); // Hide the mobile navigation
        }
    };

    useEffect(() => {
        // Add global click listener

        if (typeof window !== "undefined") {
            setPathname(window.location.pathname);
            const handleScroll = () => {
                const scrollTop = window.scrollY; // Pixels scrolled from the top
                const scrollHeight = document.documentElement.scrollHeight; // Total height of the document
                const clientHeight = document.documentElement.clientHeight; // Visible height of the viewport
                const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100; // Calculate percentage
                setScrollPercent(Math.min(Math.max(scrolled, 0), 100)); // Ensure it's between 0 and 100
            };
            window.addEventListener("scroll", handleScroll);
            document.addEventListener("click", handleClickOutside);
            // Attach event listeners for click and touch events
            document.addEventListener("mousedown", handleMobileNavOutsideClick);
            document.addEventListener("touchstart", handleMobileNavOutsideClick);

            //creating bootstrap js script
            const bootstrapBundleScript = document.createElement("script");
            bootstrapBundleScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
            bootstrapBundleScript.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
            bootstrapBundleScript.crossOrigin = "anonymous";

            document.head.appendChild(bootstrapBundleScript);

            //Bootstrap css
            const bootstrapCss = document.createElement("link");
            bootstrapCss.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
            bootstrapCss.rel = "stylesheet";

            document.head.appendChild(bootstrapCss);

            return () => {
                // Cleanup the listener on unmount
                document.removeEventListener("click", handleClickOutside);
                window.removeEventListener("scroll", handleScroll);
                document.head.removeChild(bootstrapBundleScript);
                document.head.removeChild(bootstrapCss);
                document.removeEventListener("mousedown", handleMobileNavOutsideClick);
                document.removeEventListener("touchstart", handleMobileNavOutsideClick);
            };
        }


    }, []);

    const toggleDcourseDropdown = () => {
        setCourseDropdown((prev) => !prev)
    }

    return <>
        <div className="header" bis_skin_checked={1}>
            {/* Logo */}
            <div className="header-left active" bis_skin_checked={1}>
                <a href="index.html" className="logo">
                    <img src="/assets/img/logo.png" alt="" />
                </a>
                <a href="index.html" className="logo-small">
                    <img src="assets/img/logo-small.png" alt="" />
                </a>
                <a id="toggle_btn" href="javascript:void(0);"></a>
            </div>
            {/* /Logo */}
            <a id="mobile_btn" className="mobile_btn" href="#sidebar">
                <span className="bar-icon">
                    <span />
                    <span />
                    <span />
                </span>
            </a>
            {/* Header Menu */}
            <ul className="nav user-menu">
                {/* Search */}
                <li className="nav-item">
                    <div className="top-nav-search" bis_skin_checked={1}>
                        <a href="javascript:void(0);" className="responsive-search">
                            <i className="fa fa-search" />
                        </a>
                        <form action="#">
                            <div className="searchinputs" bis_skin_checked={1}>
                                <input type="text" placeholder="Search Here ..." />
                                <div className="search-addon" bis_skin_checked={1}>
                                    <span>
                                        <img src="assets/img/icons/closes.svg" alt="img" />
                                    </span>
                                </div>
                            </div>
                            <a className="btn" id="searchdiv">
                                <img src="assets/img/icons/search.svg" alt="img" />
                            </a>
                        </form>
                    </div>
                </li>
                {/* /Search */}
                {/* Flag */}
                <li className="nav-item dropdown has-arrow flag-nav">
                    <a
                        className="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="javascript:void(0);"
                        role="button"
                    >
                        <img src="assets/img/flags/us1.png" alt="" height={20} />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right" bis_skin_checked={1}>
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="assets/img/flags/us.png" alt="" height={16} /> English
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="assets/img/flags/fr.png" alt="" height={16} /> French
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="assets/img/flags/es.png" alt="" height={16} /> Spanish
                        </a>
                        <a href="javascript:void(0);" className="dropdown-item">
                            <img src="/assets/img/flags/de.png" alt="" height={16} /> German
                        </a>
                    </div>
                </li>
                {/* /Flag */}
                {/* Notifications */}
                <li className="nav-item dropdown">
                    <a
                        href="javascript:void(0);"
                        className="dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                    >
                        <img src="/assets/img/icons/notification-bing.svg" alt="img" />{" "}
                        <span className="badge rounded-pill">4</span>
                    </a>
                    <div className="dropdown-menu notifications" bis_skin_checked={1}>
                        <div className="topnav-dropdown-header" bis_skin_checked={1}>
                            <span className="notification-title">Notifications</span>
                            <a href="javascript:void(0)" className="clear-noti">
                                {" "}
                                Clear All{" "}
                            </a>
                        </div>
                        <div className="noti-content" bis_skin_checked={1}>
                            <ul className="notification-list">
                                <li className="notification-message">
                                    <a href="activities.html">
                                        <div className="media d-flex" bis_skin_checked={1}>
                                            <span className="avatar flex-shrink-0">
                                                <img alt="" src="assets/img/profiles/avatar-02.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1" bis_skin_checked={1}>
                                                <p className="noti-details">
                                                    <span className="noti-title">John Doe</span> added new
                                                    task{" "}
                                                    <span className="noti-title">
                                                        Patient appointment booking
                                                    </span>
                                                </p>
                                                <p className="noti-time">
                                                    <span className="notification-time">4 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="activities.html">
                                        <div className="media d-flex" bis_skin_checked={1}>
                                            <span className="avatar flex-shrink-0">
                                                <img alt="" src="assets/img/profiles/avatar-03.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1" bis_skin_checked={1}>
                                                <p className="noti-details">
                                                    <span className="noti-title">Tarah Shropshire</span>{" "}
                                                    changed the task name{" "}
                                                    <span className="noti-title">
                                                        Appointment booking with payment gateway
                                                    </span>
                                                </p>
                                                <p className="noti-time">
                                                    <span className="notification-time">6 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="activities.html">
                                        <div className="media d-flex" bis_skin_checked={1}>
                                            <span className="avatar flex-shrink-0">
                                                <img alt="" src="assets/img/profiles/avatar-06.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1" bis_skin_checked={1}>
                                                <p className="noti-details">
                                                    <span className="noti-title">Misty Tison</span> added{" "}
                                                    <span className="noti-title">Domenic Houston</span> and{" "}
                                                    <span className="noti-title">Claire Mapes</span> to
                                                    project{" "}
                                                    <span className="noti-title">
                                                        Doctor available module
                                                    </span>
                                                </p>
                                                <p className="noti-time">
                                                    <span className="notification-time">8 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="activities.html">
                                        <div className="media d-flex" bis_skin_checked={1}>
                                            <span className="avatar flex-shrink-0">
                                                <img alt="" src="assets/img/profiles/avatar-17.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1" bis_skin_checked={1}>
                                                <p className="noti-details">
                                                    <span className="noti-title">Rolland Webber</span>{" "}
                                                    completed task{" "}
                                                    <span className="noti-title">
                                                        Patient and Doctor video conferencing
                                                    </span>
                                                </p>
                                                <p className="noti-time">
                                                    <span className="notification-time">12 mins ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="notification-message">
                                    <a href="activities.html">
                                        <div className="media d-flex" bis_skin_checked={1}>
                                            <span className="avatar flex-shrink-0">
                                                <img alt="" src="assets/img/profiles/avatar-13.jpg" />
                                            </span>
                                            <div className="media-body flex-grow-1" bis_skin_checked={1}>
                                                <p className="noti-details">
                                                    <span className="noti-title">Bernardo Galaviz</span> added
                                                    new task{" "}
                                                    <span className="noti-title">Private chat module</span>
                                                </p>
                                                <p className="noti-time">
                                                    <span className="notification-time">2 days ago</span>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="topnav-dropdown-footer" bis_skin_checked={1}>
                            <a href="activities.html">View all Notifications</a>
                        </div>
                    </div>
                </li>
                {/* /Notifications */}
                <li className="nav-item dropdown has-arrow main-drop">
                    <a
                        href="javascript:void(0);"
                        className="dropdown-toggle nav-link userset"
                        data-bs-toggle="dropdown"
                    >
                        <span className="user-img">
                            <img src="assets/img/profiles/avator1.jpg" alt="" />
                            <span className="status online" />
                        </span>
                    </a>
                    <div className="dropdown-menu menu-drop-user" bis_skin_checked={1}>
                        <div className="profilename" bis_skin_checked={1}>
                            <div className="profileset" bis_skin_checked={1}>
                                <span className="user-img">
                                    <img src="assets/img/profiles/avator1.jpg" alt="" />
                                    <span className="status online" />
                                </span>
                                <div className="profilesets" bis_skin_checked={1}>
                                    <h6>John Doe</h6>
                                    <h5>Admin</h5>
                                </div>
                            </div>
                            <hr className="m-0" />
                            <a className="dropdown-item" href="profile.html">
                                {" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-user me-2"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                </svg>{" "}
                                My Profile
                            </a>
                            <a className="dropdown-item" href="generalsettings.html">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-settings me-2"
                                >
                                    <circle cx={12} cy={12} r={3} />
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                                </svg>
                                Settings
                            </a>
                            <hr className="m-0" />
                            <a className="dropdown-item logout pb-0" href="signin.html">
                                <img
                                    src="assets/img/icons/log-out.svg"
                                    className="me-2"
                                    alt="img"
                                />
                                Logout
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
            {/* /Header Menu */}
            {/* Mobile Menu */}
            <div className="dropdown mobile-user-menu" bis_skin_checked={1}>
                <a
                    href="javascript:void(0);"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="fa fa-ellipsis-v" />
                </a>
                <div className="dropdown-menu dropdown-menu-right" bis_skin_checked={1}>
                    <a className="dropdown-item" href="profile.html">
                        My Profile
                    </a>
                    <a className="dropdown-item" href="generalsettings.html">
                        Settings
                    </a>
                    <a className="dropdown-item" href="signin.html">
                        Logout
                    </a>
                </div>
            </div>
            {/* /Mobile Menu */}
        </div>

    </>
}

export default Navbar;