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
        <header
            className="uk-sticky uk-sticky-fixed backdrop-filter backdrop-blur-2xl is-dark  border-b"
            uk-sticky={`${pathName == "/" ? "cls-inactive: is-dark is-transparent border-b" : ""}`}
            style={{ position: "fixed", top: 0 }}
        >
            <div className="header_inner" bis_skin_checked={1}>
                <div className="left-side" bis_skin_checked={1}>
                    {/* Logo */}
                    <div id="logo" bis_skin_checked={1}>
                        <a href="/">
                            <img style={{ height: 50, width: "auto" }} src="/assets/images/codecrafter_logo.png" alt="" />
                            <img
                                style={{ height: 50, width: "auto" }}
                                src="/assets/images/codecrafter_logo.png"
                                className="logo_inverse"
                                alt="Codecrafter Institute - Expert Training in Mean Stack, Mern Stack, NextJS, and DevOps (AWS, Azure) for IT Students and Professionals."
                            />
                            <img
                                src="/assets/images/codecrafter_logo.png"
                                className="logo_mobile"
                                alt="Codecrafter Institute: Leading IT Training for Mean Stack, Mern Stack, NextJS, and DevOps (AWS, Azure) for Aspiring Professionals."
                            />
                        </a>
                    </div>
                    {/* icon menu for mobile */}
                    <div
                        onClick={() => setMobileMenu(prev => !prev)}
                        className="triger"
                        bis_skin_checked={1}
                    ></div>
                    {/* menu bar for mobile */}
                    <nav ref={mobileMenuRef} className={`header_menu ${mobileMenu ? "is-visible" : ""}`}>
                        <ul>
                            <li>
                                <a ref={buttonRef} onBlur={() => toggleDcourseDropdown()} onClick={() => toggleDcourseDropdown()} aria-expanded={coursesDropdown} className={`${coursesDropdown ? "uk-open" : ""}`} >
                                    Courses
                                </a>
                                <div
                                    ref={dropdownRef}
                                    uk-drop="mode: click"
                                    className={`category-dropdown uk-drop ${coursesDropdown ? "uk-open uk-drop-bottom-left" : ""}`}
                                    bis_skin_checked={1}
                                >
                                    <ul>
                                        <li>

                                            <a href="/courses/5" style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.7)" }} >

                                                <ion-icon
                                                    name="newspaper-outline"
                                                    className="is-icon md hydrated"
                                                    role="img"
                                                    aria-label="newspaper outline"
                                                />
                                                AWS DevOps
                                            </a>
                                        </li>
                                        <li>

                                            <a href="/courses/3" style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.7)" }} >

                                                <ion-icon
                                                    name="leaf-outline"
                                                    className="is-icon md hydrated"
                                                    role="img"
                                                    aria-label="leaf outline"
                                                />
                                                MERN Stack
                                            </a>
                                        </li>
                                        <li>

                                            <a href="/courses/2" style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.7)" }} >

                                                <ion-icon
                                                    name="briefcase-outline"
                                                    className="is-icon md hydrated"
                                                    role="img"
                                                    aria-label="briefcase outline"
                                                />
                                                NextJS
                                            </a>
                                        </li>
                                        <li>

                                            <a href="/courses/6" style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.7)" }} >

                                                <ion-icon
                                                    name="color-palette-outline"
                                                    className="is-icon md hydrated"
                                                    role="img"
                                                    aria-label="color palette outline"
                                                />
                                                Axure DevOps
                                            </a>
                                        </li>
                                        <li>

                                            <a href="/courses/3" style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.7)" }}>

                                                <ion-icon
                                                    name="megaphone-outline"
                                                    className="is-icon md hydrated"
                                                    role="img"
                                                    aria-label="megaphone outline"
                                                />
                                                MERN Stack
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>

                                <a href="/blogs" className="active">
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a href="/about-us"> About Us</a>
                            </li>
                            <li>

                                <a href="/contact-us"> Contact Us</a>
                            </li>
                            {/* <li>

                                <a href="#" aria-expanded="false">
                                    Pages
                                </a>
                                <div
                                    uk-drop="mode: click"
                                    className="menu-dropdown uk-drop"
                                    bis_skin_checked={1}
                                >
                                    <ul>
                                        <li>

                                            <a href="pages-pricing.html"> Pricing</a>
                                        </li>
                                        <li>

                                            <a href="pages-faq.html"> Faq </a>
                                        </li>
                                        <li>

                                            <a href="pages-help.html"> Help </a>
                                        </li>
                                        <li>

                                            <a href="pages-terms.html"> Terms </a>
                                        </li>
                                        <li>

                                            <a href="pages-setting.html"> Setting </a>
                                        </li>
                                        <li>

                                            <a href="#" aria-expanded="false">

                                                Development
                                            </a>
                                            <div
                                                className="menu-dropdown uk-drop"
                                                uk-drop="mode: click;pos:right-top;animation: uk-animation-slide-right-small"
                                                bis_skin_checked={1}
                                            >
                                                <ul>
                                                    <li>
                                                        <a href="development-elements.html"> Elements</a>
                                                    </li>
                                                    <li>
                                                        <a href="development-components.html"> Compounents </a>
                                                    </li>
                                                    <li>
                                                        <a href="development-plugins.html"> Plugins </a>
                                                    </li>
                                                    <li>
                                                        <a href="development-icons.html"> Icons </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>

                                            <a href="course-intro.html" aria-expanded="false">

                                                Course intro 1
                                            </a>
                                            <div
                                                uk-drop="mode: click;pos:right-center"
                                                className="menu-dropdown uk-drop"
                                                bis_skin_checked={1}
                                            >
                                                <ul>
                                                    <li>

                                                        <a href="pages-pricing.html"> Pricing</a>
                                                    </li>
                                                    <li>

                                                        <a href="pages-faq.html"> Faq </a>
                                                    </li>
                                                    <li>

                                                        <a href="pages-help.html"> Help </a>
                                                    </li>
                                                    <li>

                                                        <a href="pages-terms.html"> Terms </a>
                                                    </li>
                                                    <li>

                                                        <a href="pages-setting.html"> Setting </a>
                                                    </li>
                                                    <li>

                                                        <a href="#" aria-expanded="false">

                                                            Development
                                                        </a>
                                                        <div
                                                            className="menu-dropdown uk-drop"
                                                            uk-drop="mode: click;pos:right-top;animation: uk-animation-slide-right-small"
                                                            bis_skin_checked={1}
                                                        >
                                                            <ul>
                                                                <li>
                                                                    <a href="development-elements.html"> Elements</a>
                                                                </li>
                                                                <li>
                                                                    <a href="development-components.html">

                                                                        Compounents
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="development-plugins.html"> Plugins </a>
                                                                </li>
                                                                <li>
                                                                    <a href="development-icons.html"> Icons </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li>

                                                        <a href="course-intro.html"> Course intro 1 </a>
                                                    </li>
                                                    <li>

                                                        <a href="course-intro-2.html"> Course intro 2 </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>

                                            <a href="course-intro-2.html"> Course intro 2 </a>
                                        </li>
                                    </ul>
                                </div>
                            </li> */}
                        </ul>
                    </nav>
                    {/* overly for small devices */}
                    <div
                        onClick={() => setMobileMenu(prev => !prev)}
                        className="overly"
                        bis_skin_checked={1}
                    />
                </div>
                <div style={{ display: "flex", alignItems: "center" }} className="right-side" bis_skin_checked={1}>
                    <a style={{ textDecoration: "none", background: "linear-gradient(to right, #5e548e, #9f86c0)", color: "white", padding: 8, borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }} className="phone_num" href="tel:+9131958847" >
                        <div style={{ display: "flex", alignItems: "center", borderRight: "1px solid rgba(0, 0, 0, 0.6)", height: "100%", paddingRight: 4 }} ><ion-icon style={{ fontSize: 22 }} name="call"></ion-icon> </div> <div><h4 style={{ fontSize: "1rem", margin: 0 }} >+91-9131958847</h4></div>
                    </a>
                </div>
            </div >
        </header >
    </>
}

export default Navbar;