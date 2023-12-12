import { hamburger } from "../assets/icons"
import { twMerge } from "tailwind-merge";

const HamburgerMenu = ({ navLinks, className = "", setMenuIsOpened }) => {
    const handleClick = () => {
        setMenuIsOpened(false)
    }
    
  return (
    <div className={twMerge(`${className}`)}>
        <div className=" w-[100%] h-[100vh] absolute bg-coral-red top-0 left-0 z-50 flex flex-col justify-center items-center">
            <div onClick={handleClick} className="absolute top-[23px] text-[33px] right-[31px] rotate-90 cursor-pointer">
                X
            </div>
            <div className="font-palanquin text-xl font-bold mb-10">
                <a className="hover:underline" href="/signup">Sign up </a>
                /
                <a className="hover:underline" href="/register"> Register</a>
            </div>
            <ul className="flex flex-col items-center w-[100%] text-center text-3xl font-bold">
                {navLinks.map(link => (
                    <li className="hover:bg-red-400 font-montserrat py-5 w-[100%]" key={link.label}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
export default HamburgerMenu