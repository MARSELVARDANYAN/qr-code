import { NavLink } from "react-router-dom";
import style from "./navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <div>
        <NavLink to="/qr-code/" className={({ isActive }) => isActive ? style.active : ""}>Home</NavLink>
      </div>
      <div>
        <NavLink to="/qr-code/generate" className={({ isActive }) => isActive ? style.active : ""}>Generation Qr Code</NavLink>
      </div>
      <div>
        <NavLink to="/qr-code/scanner" className={({ isActive }) => isActive ? style.active : ""}>Scanner Qr Code</NavLink>
      </div>
      <div>
        <NavLink to="/qr-code/history-generator" className={({ isActive }) => isActive ? style.active : ""}>History Generator</NavLink>
      </div>
      <div>
        <NavLink to="/qr-code/history-scanner" className={({ isActive }) => isActive ? style.active : ""}>History Scanner</NavLink>
      </div>
    </nav>
  );
};
