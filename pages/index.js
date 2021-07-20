import AboutComponent from "../components/about";
import { useState } from "react";
import HomeComponent from "../components/home";
import RegisterComponent from "../components/register";
import MainLayoutComponent from "../components/main_layout";
import About from "./about";


export default function Home() {

  return (
    <MainLayoutComponent>
      <AboutComponent></AboutComponent>
    </MainLayoutComponent>
  );
}
