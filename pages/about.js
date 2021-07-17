import AboutComponent from "../components/about";
import MainLayoutComponent from "../components/main_layout";

export default function About() {
  return (
    <div>
      <MainLayoutComponent>
          <AboutComponent />
      </MainLayoutComponent>
    </div>
  );
}
