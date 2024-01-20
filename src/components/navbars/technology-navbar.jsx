import { useNavigate } from "react-router-dom";

export default function TechnologyNavbar() {
  const navigate = useNavigate();
  function handleClickVehicle() {
    navigate("/technology");
  }
  function handleClickSpaceport() {
    navigate("/technology/spaceport");
  }
  function handleClickCapsule() {
    navigate("/technology/capsule");
  }
  return (
    <nav>
      <ul>
        <li>
          <button onClick={handleClickVehicle}>
            <div>Vehicle</div>
          </button>
        </li>
        <li>
          <button onClick={handleClickSpaceport}>
            <div>Spaceport</div>
          </button>
        </li>
        <li>
          <button onClick={handleClickCapsule}>
            <div>Capsule</div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
