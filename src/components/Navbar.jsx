import { headerLogo } from "../assets/images/index";
import { hamburger } from "../assets/icons";
import { navLinks } from "../variables";

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="header logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className="font-montserrat leading-normal text-lg text-slate-gray" href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      <div className="lg:hidden">
            <img src={hamburger} alt="hamburger menu logo" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
