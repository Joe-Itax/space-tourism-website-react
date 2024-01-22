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
      if (window.innerWidth < 768) {
        document.body.style.backgroundImage =
          "url(assets/home/background-home-tablet.jpg)";
      }
    }
  }, [location.pathname]);

  return (
    <main
      className={`grid-rows-[repeat(2,1fr)] text-center md:grid-rows-[repeat(1,1fr)] col-[1_/_span_12] row-[3_/_span_1] self-center justify-self-center grid grid-cols-[repeat(12,1fr)]`}
    >
      <section
        className={`col-[3_/_-3] row-[1_/_span_1] self-center justify-self-center md:col-[2_/_span_5] md:row-[1_/_span_1] pr-0 min-[890px]:pr-[8%] min-[1150px]:pr-[20%] max-[768px]:self-center max-[768px]:justify-self-center`}
      >
        <h5 className={`mb-[1.4rem] md:text-left`}>So, you want to travel</h5>
        <h1 className={`mb-[1.4rem] md:text-left`}>Space</h1>
        <p className={`mb-[1.4rem] md:text-left`}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <div className="boxBtnExplore col-[3_/_-3] row-[2_/_span_1] self-center justify-self-center md:col-[10_/_span_3] md:row-[1_/_span_1] min-[890px]:col-[9_/_span_3] min-[890px]:row-[1_/_span_1] md:self-end md:justify-self-end">
        <Link
          to="/destination"
          className={`flex transition-all duration-[0.3s]`}
        >
          <div className="btnHover flex p-8 min-[380px]:p-16 no-underline transition-all duration-[0.3s] md:p-16 hover:bg-[rgba(146,130,130,0.7)]">
            <p
              className={`text-base min-[270px]:text-[1.4rem] p-[2.8rem] min-[270px]:p-16 min-[380px]:p-20 min-[890px]:p-24 text-black font-normal uppercase text-center bg-white`}
            >
              Explore
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
