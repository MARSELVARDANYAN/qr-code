import { NavLink } from "react-router-dom";
import style from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <div>
        <NavLink to="/" className={({ isActive }) => isActive ? style.active : ""}>Home</NavLink>
      </div>
      <div>
        <NavLink to="/generate" className={({ isActive }) => isActive ? style.active : ""}>Generation Qr Code</NavLink>
      </div>
      <div>
        <NavLink to="/scanner" className={({ isActive }) => isActive ? style.active : ""}>Scanner Qr Code</NavLink>
      </div>
      <div>
        <NavLink to="/history-generator" className={({ isActive }) => isActive ? style.active : ""}>History Generator</NavLink>
      </div>
      <div>
        <NavLink to="/history-scanner" className={({ isActive }) => isActive ? style.active : ""}>History Scanner</NavLink>
      </div>
    </nav>
  );
};
