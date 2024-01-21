import { useContext, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

export default function Moon() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/destination") {
      document.body.style.backgroundImage =
        "url(assets/destination/background-destination-desktop.jpg)";
      document.body.style.gridTemplateColumns = "150px 2fr 4fr 1fr";
    }
  }, [location.pathname]);
  return (
    <div>
      <h1>Moon</h1>
      <p>
        The Moon is a barren, rocky world without air and water. It has dark
        lava plain on its surface. The Moon is filled with craters. It has no
        light of its own. It gets its light from the Sun. The Moon keeps
        changing its shape as it moves around the Earth.
      </p>
    </div>
  );
}
