import { useContext, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import DestinationNavbar from "../../components/navbars/destination-navbar";

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
    <main>
      <div class="pickTitle-box">
        <span id="pickTitleSpan">01</span>
        <h3 id="pickTitle">Pick your destination</h3>
      </div>
      <section class="img-box">
        <img src="../assets/destination/image-moon.png" />
      </section>
      <section class="detail-box">
        <div class="destination-box">
          <div class="moon-box">
            <input
              type="radio"
              id="moon"
              value="moon"
              name="destination"
              checked
            />
            <label for="moon">Moon</label>
          </div>
          <div class="mars-box">
            <input type="radio" id="mars" value="mars" name="destination" />
            <label for="mars">Mars</label>
          </div>
          <div class="europa-box">
            <input type="radio" id="europa" value="europa" name="destination" />
            <label for="europa">Europa</label>
          </div>
          <div class="titan-box">
            <input type="radio" id="titan" value="titan" name="destination" />
            <label for="titan">Titan</label>
          </div>
        </div>
        <h2 id="principalTitle">Moon</h2>
        <div class="text-destination">
          <p>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
        </div>
        <div class="duree-box">
          <div class="distance">
            <h5>Avg. Distance</h5>
            <h4>384,400 km</h4>
          </div>
          <div class="temps">
            <h5>Est. travel time</h5>
            <h4>3 days</h4>
          </div>
        </div>
      </section>
    </main>
  );
}
