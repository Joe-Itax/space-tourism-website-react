import { useNavigate } from "react-router-dom";

export default function CrewNavbar() {
  const navigate = useNavigate();
  function handleClickCrew() {
    navigate("/crew");
  }
  function handleClickSpecialist() {
    navigate("/crew/specialist");
  }
  function handleClickPilot() {
    navigate("/crew/pilot");
  }
  function handleClickEngineer() {
    navigate("/crew/engineer");
  }
  return (
    <nav>
      <ul>
        <li>
          <button onClick={handleClickCrew}>
            <div>Commander</div>
          </button>
        </li>
        <li>
          <button onClick={handleClickSpecialist}>
            <div>Specialist</div>
          </button>
        </li>
        <li>
          <button onClick={handleClickPilot}>
            <div>Pilot</div>
          </button>
        </li>
        <li>
          <button onClick={handleClickEngineer}>
            <div>Engineer</div>
          </button>
        </li>
      </ul>
    </nav>
  );
}
