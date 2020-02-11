import React from "react";
import Navmenu from "./components/Navmenu";
import Main from "./components/Main";
import Services from "./components/Services";
import GlobalCamp from "./components/GlobalCamp";
import Statistics from "./components/Statistics";
import Promotion from "./components/Promotion";
import Offices from "./components/Offices";
import Footer from "./components/Footer";
import "./App.css";

const Items = [
  { title: "About-us" },
  { title: "Career" },
  {
    title: "Departments",
    drop: [
      "Marketing & PR",
      "Customer Success & Sales",
      " IT,Product,Design & UX",
      "Finance & Administration",
      "HR & more"
    ]
  }
];
const Servicecardtab = [
  {
    title: "For-patients",
    cardtitle: "Find a doctor,book a visit and solve any health-related doubt",
    selecttab: [
      "CHOOSE COUNTRY",
      "ARGENTINA",
      "AUSTRALIA",
      "BRAZIL",
      "CHILE",
      "COLOMBIA",
      "FRANCE"
    ],
    imagesrc: "https://www.docplanner.com/img/screen-marketplace@2x.png"
  },
  {
    title: "For-doctors",
    cardtitle: " Save time managing visits and cut no-shows by half",
    imagesrc: "https://www.docplanner.com/img/screen-saas@2x.png"
  }
];
const OfficeCountriestab = [
  { image: "https://www.docplanner.com/images/warsaw.png", title: "Warsaw" },
  {
    image: "https://www.docplanner.com/images/barcelona.png",
    title: "Barcelona"
  },
  {
    image: "https://www.docplanner.com/images/istanbul.png",
    title: "Istambul"
  },
  { image: "https://www.docplanner.com/images/rome.png", title: "Rome" },
  {
    image: "https://www.docplanner.com/images/mexico-city.png",
    title: "Mexico-City"
  },
  { image: "https://www.docplanner.com/images/curitiba.png", title: "Curitiba" }
];

function App() {
  return (
    <div className="App">
      <Navmenu nav={Items} />
      <Main />
      <Services servicecard={Servicecardtab} />
      <GlobalCamp Global={GlobalCamp} />
      <Statistics />
      <Promotion />
      <Offices officecard={OfficeCountriestab} />
      <Footer />
    </div>
  );
}

export default App;
