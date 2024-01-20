import { Outlet } from "react-router-dom";

import TechnologyNavbar from "../navbars/technology-navbar";

export default function TechnologyLayout() {
  return (
    <div>
      <TechnologyNavbar />
      <Outlet />
    </div>
  );
}
