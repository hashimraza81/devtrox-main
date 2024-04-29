import "./Footer.scss";
import Image from "next/image";
import navbrand from "../../assets/navbrand.svg";
import Link from "next/link";

import {
    faInstagram,
    faFacebook,
    faDiscord,
    faXTwitter,
    faLinkedin,
    faThreads,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const footerLinks = {
    services: [
        {
            to: "/web-development",
            name: "Web Development",
        },
        {
            to: "/ui-ux-design",
            name: "UI/UX Design",
        },
        {
            to: "/mobile-development",
            name: "Mobile Development",
        },
        {
            to: "/branding",
            name: "Branding",
        },
        {
            to: "/digital-marketing",
            name: "Import Export",
        },
        {
            to: "/social-media-management",
            name: "Social Media Management",
        },
    ],
    pages: [
        {
            to: "/#services",
            name: "Services",
        },
        {
            to: "/#about",
            name: "About",
        },
        {
            to: "/#portfolio",
            name: "Portfolio",
        },
        {
            to: "/#contact",
            name: "Contact",
        },
    ],

    socials: [
        {
            to: "#",
            icon: faInstagram,
        },
        {
            to: "#",
            icon: faDiscord,
        },
        {
            to: "#",
            icon: faFacebook,
        },
        {
            to: "#",
            icon: faXTwitter,
        },
        {
            to: "#",
            icon: faLinkedin,
        },
        {
            to: "#",
            icon: faThreads,
        },
        {
            to: "#",
            icon: faWhatsapp,
        },
    ],
};

const Footer = () => {
    return (
        <section id="footer" className="footer ">
            <div className="boxed">
                <div className="footer__top padding">
                    <div className="footer__col col-1">
                        <div className="footer__branding">
                            <Image
                                className="footer__branding__logo"
                                src={navbrand}
                                alt="Maa Teh Logo"
                            />
                            {/* <h1 className="heading-quaternary color-dark footer__branding__tilte">
                                Devtrox
                            </h1> */}
                        </div>
                        <p className="body-regular">
                            We believe in a digital-first future, and our work
                            embodies this. With every project, we aim to merge
                            aesthetics with functionality, ensuring your brand
                            stands out and succeeds.
                        </p>
                    </div>

                    <div className="footer__col col-2">
                        <h2 className="heading-senary">Services</h2>
                        <div className="footer__links">
                            {footerLinks.services.map((link, index) => (
                                <p className="footer__links__item" key={index}>
                                    {link.name}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="footer__col col-3">
                        <h2 className="heading-senary">Pages</h2>
                        <div className="footer__links">
                            {footerLinks.pages.map((link, index) => (
                                <Link
                                    className="footer__links__item"
                                    key={index}
                                    href={link.to}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="footer__col col-4">
                        <h2 className="heading-senary">Socials</h2>
                        <div className="footer__socials">
                            {footerLinks.socials.map((link, index) => (
                                <Link target="blank" key={index} href={link.to}>
                                    <FontAwesomeIcon
                                        icon={link.icon}
                                        className="footer__socials__icon"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer__copyrights padding">
                    <p className="footer__copyrights__text">
                        © 2024 by Maa Teh. All Rights reserved
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Footer;
