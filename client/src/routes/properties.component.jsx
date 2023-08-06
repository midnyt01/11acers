import React, { useState } from "react";
import Topbar from "../components/topbar/topbar.component";
import Footer from "../components/footer/footer.component";
import CurrentProperties from "../components/properties/current-properties-page.component";
import RentoutProperties from "../components/properties/rent-out-properties-page.component";

const PropertiesPage = () => {

  const [activeContent, setActiveContent] = useState("properties");

  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div>
      <Topbar />
      {activeContent === "current" && <CurrentProperties />}
      {activeContent === "rentout" && <RentoutProperties />}
      <Footer />
    </div>
  );
};

export default PropertiesPage;
