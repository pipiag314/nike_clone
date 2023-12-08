import { twMerge } from "tailwind-merge";

const Button = ({ content, icon = "", className = "" }) => {
  return (
    <button className={twMerge(`py-3 px-4 flex justify-center 
                        items-center gap-2 border border-coral-red font-montserrat 
                        text-lg leading-none bg-coral-red rounded-full text-white`, className)}
    >
      {content}
      {icon && <img src={icon} alt="icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  );
};

export default Button;
