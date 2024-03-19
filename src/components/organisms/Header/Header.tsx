import { useUser } from "@utils/context/userContext";
import { useAuth } from "@utils/hooks/useAuth";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import Logo from "@components/atoms/Logo/Logo";
import Navbar from "@components/molecules/Navbar/Navbar";
const Header = () => {
  const { user } = useUser();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const isSignupPage = location.pathname === "/signup";
  const isPortfolioPage = location.pathname.startsWith("/portfolio/");
  const headerClass = isPortfolioPage
    ? `${styles.headerContainer} ${styles.portfolioHeader} container`
    : styles.headerContainer;
  if (isSignupPage) {
    return null;
  }
  return (
    <header className={headerClass}>
      {user ? (
        <>
          <Logo />
          <Navbar
            isAuthenticated={isAuthenticated}
            username={`${user.username}`}
          ></Navbar>
        </>
      ) : (
        <>
          <Logo />
          <Navbar isAuthenticated={isAuthenticated}></Navbar>
        </>
      )}
    </header>
  );
};
export default Header;
