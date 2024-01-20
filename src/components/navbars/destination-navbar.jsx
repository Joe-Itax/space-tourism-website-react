import { useNavigate } from "react-router-dom";

export default function DestinationNavbar() {
  const navigate = useNavigate();
  function handleClickMoon() {
    navigate("/destination");
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
    <nav>
      <ul>
        <li>
          <button onClick={handleClickMoon}>
            <div>Moon</div>
          </button>
        </li>
        <li>
          <button onClick={handleClickMars}>
            <div>Mars</div>
          </button>
        </li>
        <li>
          <button onClick={handleClickEuropa}>
            <div>Europa</div>
          </button>
        </li>
        <li>
          <button onClick={handleClickTitan}>
            <div>Titan</div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
