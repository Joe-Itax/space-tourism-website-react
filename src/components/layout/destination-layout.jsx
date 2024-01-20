import { Outlet } from "react-router-dom";

import DestinationNavbar from "../navbars/destination-navbar";

export default function DestinationLayout() {
  return (
    <div>
      <DestinationNavbar />
      <Outlet />
    </div>
  );
}
