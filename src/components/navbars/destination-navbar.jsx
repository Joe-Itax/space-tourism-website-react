import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import "./destination-nav.css";

export default function DestinationNavbar() {
  const navigate = useNavigate();

  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  function handleClickMoon() {
    navigate("/destination/moon");
  }
  function handleClickMars() {
    navigate("/destination/mars");
  }
  function handleClickEuropa() {
    navigate("/destination/europa");
  }
  function handleClickTitan() {
    navigate("/destination/titan");
  }
  return (
    <nav className="destinaion-nav">
      <ul className="flex w-full gap-8">
        <li>
          <button
            onClick={handleClickMoon}
            className={activeItem === "/destination/moon" ? "active" : ""}
          >
            Moon
          </button>
        </li>
        <li>
          <button
            onClick={handleClickMars}
            className={activeItem === "/destination/mars" ? "active" : ""}
          >
            Mars
          </button>
        </li>
        <li>
          <button
            onClick={handleClickEuropa}
            className={activeItem === "/destination/europa" ? "active" : ""}
          >
            Europa
          </button>
        </li>
        <li>
          <button
            onClick={handleClickTitan}
            className={activeItem === "/destination/titan" ? "active" : ""}
          >
            Titan
          </button>
        </li>
      </ul>
    </nav>
  );
}
