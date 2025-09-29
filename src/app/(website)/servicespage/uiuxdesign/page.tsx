import React from "react";
import Hero from "../../components/hero";
import Ui from "@/app/(website)/components/ui";
import ToolsTechnology from "@/app/(website)/components/toolstechnology";
import CaseStudies from "@/app/(website)/components/casestudies";


export default function UiUxDesign() {
  return (
    <div className="mt-10">
      <Hero
        title="Elevate User Experiences with Cutting-Edge UI/UX Design"
        description="We build high-performance websites and applications that engage your customers and grow your brand. From design to deployment — we've got you covered."
        imageSrc="/img/uiservice.webp"
      />
     <Ui/>
     <ToolsTechnology/>
     <CaseStudies/>
    </div>
  );
}
