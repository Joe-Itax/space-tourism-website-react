import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/crew">Crew</NavLink>
          </li>
          <li>
            <NavLink to="/destination">Destination</NavLink>
          </li>
          <li>
            <NavLink to="/technology">Technology</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
