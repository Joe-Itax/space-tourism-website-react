import { Outlet } from "react-router-dom";

import CrewNavbar from "../navbars/crew-navbar";

export default function CrewLayout() {
  return (
    <div>
      <CrewNavbar />
      <Outlet />
    </div>
  );
}
