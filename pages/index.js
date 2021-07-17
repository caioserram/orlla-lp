import AboutComponent from "../components/about";
import { useState } from "react";
import HomeComponent from "../components/home";
import RegisterComponent from "../components/register";
import MainLayoutComponent from "../components/main_layout";
import About from "./about";


function chooseCurrentPage(current_page){
  switch (current_page) {
    case "home":
      return (<HomeComponent />)
    case "about":
      return (<AboutComponent/>);
    case "register":
      return (<RegisterComponent/>);
    default:
      return (<HomeComponent />)
  }

}

export default function Home() {
  const [current_page, set_current_page] = useState("home");

  return (
    <MainLayoutComponent>
      <AboutComponent></AboutComponent>
    </MainLayoutComponent>
  );
}
