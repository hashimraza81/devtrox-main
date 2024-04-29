"use client";
import { useState, useEffect } from "react";
import "./Navbar.scss";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import navbrand from "../../assets/navbrand.svg";
import Image from "next/image";

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const toggleNavbar = () => {
        setNavbar(!navbar);
    };

    const navLinks = [
        {
            to: "/#header",
            name: "Home",
        },
        {
            to: "/#about",
            name: "About Us",
        },
        {
            to: "/#services",
            name: "Services",
        },
        // {
        //     to: "/#portfolio",
        //     name: "Portfolio",
        // },
        // {
        //     to: "/#team",
        //     name: "Team",
        // },
        // {
        //     to: "/#testimonials",
        //     name: "Testimonials",
        // },
        {
            to: "/#contact",
            name: "Contact",
        },
    ];

    useEffect(() => {
        const handleRouteChange = () => {
            setNavbar(false);
        };

        window.addEventListener("hashchange", handleRouteChange);

        return () => {
            window.removeEventListener("hashchange", handleRouteChange);
        };
    }, []);

    return (
        <div className="navbar">
            <header className="padding">
                <div className="boxed">
                    <div className="header-content">
                        <Link className="navbrand" href={"/#header"}>
                            <Image
                                src={navbrand}
                                alt=""
                                className="navbrand-img"
                            />
                            {/* <h2 className="heading-senary color-dark navbrand-title">
                                Devtrox
                            </h2> */}
                        </Link>

                        <div className="header-right">
                            <div className="header-left">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.to}
                                        className="nav-link"
                                        scroll={true}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="header-right-mob">
                            <div className="open-header" onClick={toggleNavbar}>
                                <span className="material-symbols-outlined">
                                    <FontAwesomeIcon
                                        className="icon-menu"
                                        width={25}
                                        height={25}
                                        icon={faBars}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div
                className="header-mob padding"
                style={{ display: navbar ? "block" : "none" }}
            >
                <div className="box">
                    <div className="header-mob-head padding">
                        <Link href={"/#header"}>
                            <Image src={navbrand} alt="" className="navbrand" />
                        </Link>
                        <div className="header-mob-head-right">
                            <div
                                className="close-header"
                                onClick={toggleNavbar}
                            >
                                <span className="material-symbols-outlined">
                                    <FontAwesomeIcon
                                        className="close-icon"
                                        width={25}
                                        height={25}
                                        icon={faXmark}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="header-mob-body">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.to}
                                className="nav-link"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
