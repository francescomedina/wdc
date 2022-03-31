import React, {useState, useEffect, useRef} from "react";
import NavBarButton from "./NavBarButton";

function useOutsideAlerter(ref, setOpenNav) {
  useEffect(() => {

      function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
              setOpenNav(false);
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}

const Header = ({logo, homeText, productText, faqText, contactText}) => {

  const [openNav, setOpenNav] = useState(false);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setOpenNav);

  return (
    <div className="flex flex-col items-center justify-center h-80 bg-white">
        <a href="/" className="logo">
            <img className="object-scale-down h-48 w-96" src={logo} alt="logo" />
        </a>

          {/* Mobile NavBar */}

        <div className="flex justify-center w-80 lg:hidden">
            <div className="flex flex-col items-center justify-center">
                <NavBarButton href="#home" text={homeText} />
                <NavBarButton href="#product" text={productText} />
                <NavBarButton href="#faq" text={faqText} />
                <NavBarButton href="#contact" text={contactText} />
            </div>
        </div>

          
          {/* Desktop NavBar */}

        <div className="flex justify-around w-80 lg:visible invisible">
            <a href="#home" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Home</a>
            <a href="#product" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Product</a>
            <a href="#faq" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Faq</a>
            <a href="#contact" className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">Contact</a>
        </div>

    </div>
  );
};

export default Header;
