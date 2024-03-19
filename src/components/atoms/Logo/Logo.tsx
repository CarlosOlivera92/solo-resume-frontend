import logoImage from "@assets/images/logo.png";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoImage} alt="Logo" />
      <h1>Solo Resume</h1>
    </div>
  );
};
export default Logo;
