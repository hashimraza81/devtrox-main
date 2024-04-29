"use client";

import "./Home.scss";
import Navbar from "@/components/Navbar/Navbar";

// image imports
// hero
import heroIllustration from "../assets/home/home-hero-illustration.svg";
import aboutIllustration from "../assets/home/home-about-illustration.svg";
import Image from "next/image";

// services
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopyright,
    faPenNib,
    faCode,
    faMobileButton,
    faHashtag,
    faArrowTrendUp,

    // other icons
    faArrowRightFromBracket,
    faLink,

    // testimonials
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

// SwiperJs for Carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// portfolio
import oravew from "../assets/home/oravew.webp";
import upay from "../assets/home/upay.webp";
import roofer from "../assets/home/roofer.webp";
import rave from "../assets/home/rave.webp";
import sickicks from "../assets/home/sickicks.webp";
import gpaystore from "../assets/home/gpaystore.webp";

import Marquee from "react-fast-marquee";

// Team section
import moazzam from "../assets/team/moazzam.webp";
import umair from "../assets/team/umair.webp";
import moin from "../assets/team/moin.webp";
import hamail from "../assets/team/hamail.webp";
import alisher from "../assets/team/alisher.webp";
import awais from "../assets/team/awais.webp";
import arqam from "../assets/team/arqam.webp";
import inaam from "../assets/team/inaam.webp";
import alizahid from "../assets/team/alizahid.webp";

// Testimonials Images imports
// No User Avatar
import avatar from "../assets/review avatars/avatar.webp";

import newHorizonAvatar from "../assets/review avatars/newhorizonhosting.svg";
import whsccAvatar from "../assets/review avatars/whscc.webp";
import oravewAvatar from "../assets/review avatars/oravew.webp";
import vinkAvatar from "../assets/review avatars/vink.webp";
import p1nkAvatar from "../assets/review avatars/p1nk.webp";
import internflowAvatar from "../assets/review avatars/internflow.webp";
import BetsLtd from "../assets/review avatars/BetsLtd.svg";
import gamerraven from "../assets/review avatars/gammerraven.webp";
import highhands from "../assets/review avatars/highhands.webp";
import shactrap from "../assets/review avatars/shactrap.jpg";
import fibster from "../assets/review avatars/fibster.webp";
import adfly from "../assets/review avatars/adfly.webp";

// Data collections

// services
const services = [
    {
        title: "UI/UX Design",
        icon: faPenNib,
        details:
            "User-centric designs that combine aesthetics with usability. We create intuitive interfaces that engage and retain your customers across all digital platforms.",
    },
    {
        title: "Web Development",
        icon: faCode,
        details:
            "Robust and scalable websites that drive business growth. Our development team turns your vision into a high-performing digital experience.",
    },
    {
        title: "Mobile App Development",
        icon: faMobileButton,
        details:
            "Bring your mobile app idea to life with our end-to-end development services. We deliver seamless, user-friendly applications for iOS and Android.",
    },
    {
        title: "Branding",
        icon: faCopyright,
        details:
            "Craft a memorable brand identity that resonates with your audience. From logos to complete brand guidelines, we create a cohesive look and feel that tells your story.",
    },
    {
        title: "Social Media Management",
        icon: faHashtag,
        details:
            "Elevate your social media presence. Our strategies increase engagement, build communities, and drive brand awareness on all major platforms.",
    },
    {
        title: "Import Export",
        icon: faArrowTrendUp,
        details:
            "We specialize in the seamless import and export of cutting-edge technologies and goods, streamlining global trade while ensuring full compliance with legal regulations. Our services include global sourcing, where we help you find top-quality, competitively priced products and technologies worldwide.",
    },
];

// portfolio
// const portfolio = [
//     {
//         title: "Oravew",
//         img: oravew,
//         link: "#",
//     },
//     {
//         title: "Upay",
//         img: upay,
//         link: "#",
//     },
//     {
//         title: "Roofer",
//         img: roofer,
//         link: "#",
//     },
//     {
//         title: "Rave",
//         img: rave,
//         link: "#",
//     },
//     {
//         title: "Sickicks",
//         img: sickicks,
//         link: "#",
//     },
//     {
//         title: "G Pay Store",
//         img: gpaystore,
//         link: "#",
//     },
// ];

// testimonials
const testimonials = [
    {
        review: "Team Maa Teh were amazingly supportive with great communication making the project very simple to work with them on and I would absolutely recommend Maa Teh and would work with them again. 5 stars is not enough for this order if I could I’d put 5000 stars.",
        authorName: "Yasser & Jamie",
        authorTitle: "@ New Horizon Hosting LLC",
        img: newHorizonAvatar,
    },

    {
        review: "I was very pleased with Maa Teh, they take exceptional care of you from start to finish. They attentively listen to all your needs and also offer their insights, which opens doors for creativity. Thank you, guys! I would definitely work with you again!",
        authorName: "Mahmood",
        authorTitle: "@ WHSCC",
        img: whsccAvatar,
    },

    {
        review: "Team Maa Teh are amazing. They worked really hard to make our website great. They are a team we want to continue collaborating with.",
        authorName: "Abe & Elijah",
        authorTitle: "@ Oravew",
        img: oravewAvatar,
    },
    {
        review: "Fantastic first experience working with Team Maa Teh. Super responsive and professional in rendering the services. Great requirement gathering and flexibility for revisions! I would recommend them.",
        authorName: "Rishab",
        authorTitle: "@ Vink",
        img: vinkAvatar,
    },

    {
        review: "Really receptive and helped a lot. Gave a lot of really good suggestions",
        authorName: "Saim",
        authorTitle: "@ P1NK",
        img: p1nkAvatar,
    },

    {
        review: "This team was amazing to work with, they are experts and very attentive to client needs. I'd 100% recommend working with them!",
        authorName: "Abe & Elijah",
        authorTitle: "@ Oravew",
        img: oravewAvatar,
    },

    {
        review: "Awesome service. Would definitely work with Maa Teh again. Timely, efficient, and skilled. Definitely a top choice on this platform and anywhere else. Recommended!",
        authorName: "Jace",
        authorTitle: "@ Internflow",
        img: internflowAvatar,
    },

    {
        review: "A very fast, good and professional service, thank you so much!",
        authorName: "Luca Merlini",
        authorTitle: "@ Inigrim",
        img: avatar,
    },

    {
        review: "Working with Maa Teh was smooth as butter. They understood the requirements well and delivered the whole website in a short period of time. I know where to go for any front-end job for my agency now. He is the best.",
        authorName: "Hossain Tamzeed",
        authorTitle: "@ BETS Ltd.",
        img: BetsLtd,
    },

    {
        review: "Maa Teh consistently delivers high-quality work with great attention to detail. Maa Teh is not only technically proficient but also has a strong sense of design aesthetics, creating visually appealing and user-friendly websites.",
        authorName: "Jimmy Wang",
        authorTitle: "@ Ravenaro LLC",
        img: gamerraven,
    },

    {
        review: "Delivery was exactly as I requested, and the coding was clean and elegant. It was incredibly easy to make some very slight adjustments as necessary for integration into a larger website. Very happy with everything! Would recommend this provider to anyone!",
        authorName: "Highhands",
        authorTitle: "@ Highhands LLC",
        img: highhands,
    },

    {
        review: "Whenever I require front-end work, Maa Teh is always my go-to agency. Their expertise is exceptional, and they consistently delivers beyond my expectations by following instructions precisely. Additionally, their creativity is truly impressive and they always find innovative solutions to enhance the design. I highly recommend Maa Teh for any kind of development.",
        authorName: "Jimmy Wang",
        authorTitle: "@ OCNGIC",
        img: gamerraven,
    },

    {
        review: "The work was delivered quickly and on time. The requests were respected and in good quality. I recommend !",
        authorName: "Shac",
        authorTitle: "@ Shactrap",
        img: shactrap,
    },

    {
        review: "Excellent job, did everything I asked",
        authorName: "Chris",
        authorTitle: "@ LOL Champion Picker",
        img: avatar,
    },

    {
        review: "Did everything I asked them to and FAR FAR MORE !!! Always excellent results :)",
        authorName: "Giovanni Franzan",
        authorTitle: "@ Fibster",
        img: fibster,
    },

    {
        review: "very good job",
        authorName: "Motino",
        authorTitle: "AdFly",
        img: adfly,
    },
];

const Home = () => {
    return (
        <main className="home">
            <div className="home__header">
                <Navbar />

                <div className="home__hero">
                    <div className="boxed">
                        <div className="home__hero__content">
                            <h1 className="heading-primary">
                                Crafting{" "}
                                <span className="highlight">
                                    Digital Experiences
                                </span>{" "}
                                That Inspire and Convert
                            </h1>
                            <p className="heading-octonary">
                                Bringing Your Ideas to Life with Cutting-Edge
                                Design and Development
                            </p>
                            {/* <a href="#portfolio" className="btn btn-primary">
                                Discover Our Work
                            </a> */}
                        </div>

                        <div className="home__hero__illustration">
                            <Image
                                className="home__hero__illustration__img"
                                src={heroIllustration}
                                alt="Website Development Illustration"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <section id="services" className="home__services padding">
                <div className="boxed">
                    <p className="section-tag">Services</p>
                    <h2 className="heading-quaternary color-dark">
                        Our Expertise
                    </h2>

                    <div className="home__services__grid">
                        {services.map((service, index) => {
                            return (
                                <div
                                    key={index}
                                    className="home__services__grid__item"
                                >
                                    <FontAwesomeIcon
                                        className="home__services__grid__item__icon"
                                        icon={service.icon}
                                    />
                                    <h3 className="heading-senary color-dark">
                                        {service.title}
                                    </h3>
                                    <p className="body-regular">
                                        {service.details}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section id="about" className="home__about padding">
                <div className="boxed">
                    <div className="home__about__content">
                        <p className="section-tag">About Us</p>
                        <div className="home__about__content__body">
                            <div className="home__about__content__body__item">
                                <h2 className="heading-quaternary color-dark">
                                    Our Philosophy
                                </h2>
                                <p className="body-regular">
                                    We believe in a digital-first future, and
                                    our work embodies this. With every project,
                                    we aim to merge aesthetics with
                                    functionality, ensuring your brand stands
                                    out and succeeds.
                                </p>
                            </div>
                            <div className="home__about__content__body__item">
                                <h2 className="heading-quaternary color-dark">
                                    Our Promise
                                </h2>
                                <p className="body-regular">
                                    Your vision deserves precision. We promise
                                    to deliver tailor-made strategies that not
                                    only meet but surpass your expectations.
                                </p>
                            </div>
                            <div className="home__about__content__body__item">
                                <h2 className="heading-quaternary color-dark">
                                    Embark With Us
                                </h2>
                                <p className="body-regular">
                                    Ready for a digital transformation?
                                    Let&apos;s connect and create the future.
                                </p>
                            </div>
                            <a href="#footer" className="btn btn-primary">
                                Let&apos;s Connect
                            </a>
                        </div>
                    </div>
                    <div className="home__about__illustration">
                        <Image
                            className="home__about__illustration__img"
                            src={aboutIllustration}
                            alt="About Maa Teh Illustration Illustration"
                        />
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            {/* <section id="portfolio" className="home__portfolio padding">
                <div className="boxed">
                    <div className="home__portfolio__top">
                        <div className="home__portfolio__top__left">
                            <p className="section-tag">Portfolio</p>
                            <h2 className="heading-quaternary color-dark">
                                Our Work Speaks Volumes
                            </h2>
                            <p className="body-regular">
                                Dive into our curated selection of projects
                                where creativity and technology converge to
                                create digital artistry. Each project in our
                                portfolio exemplifies our dedication to
                                excellence and innovation.
                            </p>
                        </div>
                        <div className="home__portfolio__top__right">
                            <a href="#" className="btn btn-outlined">
                                <span className="text">View More</span>
                                <FontAwesomeIcon
                                    className="icon"
                                    icon={faArrowRightFromBracket}
                                />
                            </a>
                        </div>
                    </div>
                    <div className="home__portfolio__body">
                        {portfolio.map((project, index) => {
                            return (
                                <div
                                    key={index}
                                    className="home__portfolio__body__item"
                                >
                                    <Image
                                        className="home__portfolio__body__item__img"
                                        src={project.img}
                                        alt="Oravew"
                                    />
                                    <a
                                        href={project.link}
                                        className="heading-quinary color-dark"
                                    >
                                        <FontAwesomeIcon
                                            className="icon"
                                            icon={faLink}
                                        />
                                        <span className="text">
                                            {project.title}
                                        </span>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section> */}

            {/* CTA */}
            <section id="contact" className="home__cta padding">
                <div className="boxed">
                    <h3 className="heading-senary">Have a project in mind?</h3>
                    <a
                        href="#"
                        target="blank"
                        className="btn btn-primary"
                    >
                        Let’s Get Started
                    </a>
                </div>
            </section>

            {/* Testimonials section */}
            <section id="testimonials" className="home__testimonials padding">
                <div className="boxed">
                    <div className="home__testimonials__top">
                        <div className="home__testimonials__top__left">
                            <p className="section-tag">Testimonials</p>
                            <h2 className="heading-quaternary color-dark">
                                Hear from Our Clients
                            </h2>
                        </div>
                        <div className="home__testimonials__top__right">
                            <FontAwesomeIcon
                                icon={faAngleLeft}
                                className="prev"
                            />
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                className="next"
                            />
                        </div>
                    </div>

                    <div className="home__testimonials__carousel">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".prev",
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            {testimonials.map((testimonial, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="home__testimonials__carousel__item">
                                            <h3 className="heading-octonary">
                                                {testimonial.review}
                                            </h3>

                                            <div className="home__testimonials__carousel__item__author">
                                                <Image
                                                    src={testimonial.img}
                                                    alt="Review Author Avatar"
                                                    className="home__testimonials__carousel__item__author__avatar"
                                                />

                                                <div className="home__testimonials__carousel__item__author__details">
                                                    <h4 className="heading-octonary">
                                                        {testimonial.authorName}
                                                    </h4>
                                                    <p className="body-small">
                                                        {
                                                            testimonial.authorTitle
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* <section id="team" className="home__team">
                <div className="boxed">
                    <h2 className="heading-quaternary color-dark">
                        Devtrox Tribe
                    </h2>
                    <div className="home__team__marquee">
                        <Marquee autoFill={true}>
                            {marqueeImages.map((image) => (
                                <div
                                    key={image.alt}
                                    className="home__team__marquee__img-cont"
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        className="home__team__marquee__img-cont__img"
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section> */}
        </main>
    );
};

export default Home;
