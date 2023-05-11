import React from "react";
import FooterItems from "./FooterContainer";
import SocialIcons from "./SocialIcons";


function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
     <span className="text-3xl ml-10">Green Care</span>
      <FooterItems />
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center ml-[300px] pt-2 text-gray-400  text-sm pb-8">
        <span>© 2023 Apply. All Rights Receved</span>
        <span>Terms. Privacy Policy</span>
        
      </div>
      
    </footer>
  );
}

export default Footer;
