import { bigShoe1, bigShoe2, bigShoe3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, shoe4, shoe5, shoe6, shoe7 } from "../assets/images";
import { truckFast, shieldTick, support } from "../assets/icons/index"

// For navigation menu
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

// For Hero section images
export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

// For Hero section Stataistics
export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];


//For products section
export const products = [
    {
        imgURL: shoe4,
        name: "Nike Air Jordan-01",
        price: "$200.20",
        rating: "4.5",
    },
    {
        imgURL: shoe5,
        name: "Nike Air Jordan-10",
        price: "$210.20",
        rating: "5.0",
    },
    {
        imgURL: shoe6,
        name: "Nike Air Jordan-100",
        price: "$220.20",
        rating: "4.8",
    },
    {
        imgURL: shoe7,
        name: "Nike Air Jordan-001",
        price: "$230.20",
        rating: "4.4",
    },
];

// For Services section
export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];