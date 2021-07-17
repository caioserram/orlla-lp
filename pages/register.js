import RegisterComponent from "../components/register";
import MainLayoutComponent from "../components/main_layout";

export default function Register() {
  return (
    <div>
      <MainLayoutComponent>
          <RegisterComponent />
      </MainLayoutComponent>
    </div>
  );
}
