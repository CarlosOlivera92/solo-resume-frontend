import { INavbarProps } from "@/Data/Interfaces/Navbar";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = ({ isAuthenticated, username }: INavbarProps) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navItems}>
        {username ? (
          <>
            <li>
              <NavLink
                className={`${path === `/portfolio/${username}/personal` ? `${styles.active}` : ""}`}
                to={`portfolio/${username}/personal`}
              >
                Personal
              </NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink to={`/`}>Personal</NavLink>
          </li>
        )}
        {isAuthenticated ? (
          <>
            <li>
              <NavLink
                className={`${path === `/portfolio/${username}/settings` ? `${styles.active}` : ""}`}
                to={`portfolio/${username}/settings`}
              >
                Configuraciones
              </NavLink>
            </li>
            <li>
              <NavLink className={"btn-logout"} to="/logout">
                Cerrar Sesión
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/signup">Registrarse</NavLink>
            </li>
            <li>
              <NavLink to="/signin">Iniciar Sesión</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
