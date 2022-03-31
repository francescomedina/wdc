import React from "react";

const NavBarButton = ({text, href}) => {
  return (
    <a href={href} className="text-lg font-semibold text-blue-800 transition-all hover:text-orange-500">{text}</a>
  );
};

export default NavBarButton;