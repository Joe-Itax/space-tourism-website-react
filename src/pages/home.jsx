import { useContext, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import destinationsContext from "../context/destinations-context";
import crewContext from "../context/crew-context";
import technologyContext from "../context/technology-context";

export default function Home() {
  const destinations = useContext(destinationsContext);
  const crew = useContext(crewContext);
  const technology = useContext(technologyContext);

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundImage =
        "url(assets/home/background-home-desktop.jpg)";
      document.body.style.gridTemplateColumns = "150px 2fr 4fr 1fr";
    }
  }, [location.pathname]);

  return (
    <main
      className={`col-[1_/_span_12] row-[3_/_span_1] self-center justify-self-center grid grid-cols-[repeat(12,1fr)] grid-rows-[repeat(1,1fr)]`}
    >
      <section className={`col-[2_/_span_5] row-[1_/_span_1] pr-[20%]`}>
        <h5>So, you want to travel</h5>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <div className="boxBtnExplore col-[9_/_span_3] row-[1_/_span_1] justify-self-end flex justify-center items-center">
        <Link
          to="/destination"
          className={`no-underline bg-transparent transition-all duration-[0.3s] ease-[ease-in-out] p-16 hover:bg-[rgba(146,130,130,0.7)]`}
        >
          <div className="btnHover">
            <p
              className={`text-black font-normal text-[1.4rem] uppercase text-center bg-white p-24`}
            >
              Explore
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
