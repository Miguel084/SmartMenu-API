import WeatherForecast from "../Components/WeatherForecast.jsx";
import LogoutLink from "../Components/LogoutLink.jsx";
import AuthorizeView, { AuthorizedUser } from "../Components/AuthorizeView.jsx";

function Home() {
    return (
      <>
        <AuthorizeView>
            <span>
                <LogoutLink>
                Logout
                <AuthorizedUser value="email" />
                </LogoutLink>
            </span>
            <WeatherForecast />
        </AuthorizeView>
      </>
  );
}

export default Home