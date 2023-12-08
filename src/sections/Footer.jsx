import { footerLogo } from "../assets/images/index";
import { socialMedia as socials, footerLinks } from "../variables";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-10 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start gap-5">
          <a href="/">
            <img
              src={footerLogo}
              width={150}
              height={50}
              className="object-contain"
            />
          </a>
          <p className="text-slate-gray  font-normal font-montserrat text-base max-md:w-[28rem] leading-6">
            Elevate your wardrobe with our exclusive collection of
            fashion-forward clothing at Nike. Discover the perfect blend of
            style and comfort as you explore our curated selection of apparel
            designed to complement your individuality
          </p>
          <div className="flex items-center gap-5 mt-5">
            {socials.map((social) => (
              <div
                key={social.alt}
                className="bg-coral-red rounded-full p-1 flex justify-center items-center">
                <img src={social.src} alt={social.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 text-white justify-evenly w-full lg:gap-5 gap-10 flex-wrap">
          {footerLinks.map(link => (
            <div className="flex flex-col gap-10" key={link.title}>
              <h3 className="text-xl">{link.title}</h3>
              <ul className="flex flex-col gap-2">
                {link.links.map(subLink => (
                  <li className="font-montserrat font-normal max-md:text-sm" key={subLink.name}><a href="/">{subLink.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-12 max-sm:flex-col">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyright sign" width={20} height={20} />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
      
    </footer>
  );
};

export default Footer;