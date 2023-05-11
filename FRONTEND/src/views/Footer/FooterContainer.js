import React from "react";
import FooterItems from "./FooterItems";
import { EASYPICKUPS, PRICING, COMPANY, Icons } from "./Menus";
import SocialIcons from "./SocialIcons";

function FooterContainer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4  gap-3 leading-normal  px-5 py-10">
      <FooterItems Links={EASYPICKUPS} title="EASYPICKUPS" />
      <FooterItems Links={PRICING} title="PRICING" />
      <FooterItems Links={COMPANY} title="COMPANY" />

      <div className="mt-20">
        <span className="p-5">Follow US</span>
        <SocialIcons Icons={Icons} />
      </div>
    </div>
  );
}

export default FooterContainer;
