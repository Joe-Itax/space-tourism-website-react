import { useContext, useEffect } from "react";

import { Link, useLocation } from "react-router-dom";

import destinationsContext from "../../context/destinations-context";
import DestinationNavbar from "../../components/navbars/destination-navbar";

export default function Moon() {
  const location = useLocation();

  const dataContexts = useContext(destinationsContext);
  const dataContext = dataContexts;
  console.log(dataContext);
  useEffect(() => {
    if (location.pathname === "/destination/moon") {
      document.body.style.backgroundImage =
        "url(assets/destination/background-destination-desktop.jpg)";
      // document.body.style.display = "grid";
      document.body.style.gridTemplateColumns = "150px 2fr 4fr 1fr";
      if (window.innerWidth < 768) {
        document.body.style.backgroundImage =
          "url(assets/destination/background-destination-tablet.jpg)";
      }
    }
  }, [location.pathname]);
  return (
    <main
      className={`grid-rows-[30px_1fr_1fr] min-[890px]:grid-rows-[30px_1fr] pb-80 min-[890px]:pb-0 col-[1_/_span_12] row-[2_/_span_2] grid grid-cols-[repeat(12,1fr)] grid-rows-[30px_1fr] w-full gap-y-8`}
    >
      {dataContext ? (
        <>
          <div className="pickTitle-box col-[1_/_span_12] min-[580px]:col-[2_/_span_8] max-[580px]:self-center max-[580px]:justify-self-center max-[580px]:justify-center row-[1_/_span_1] flex items-center justify-start">
            <span
              id="pickTitleSpan"
              className={`text-[1.2rem] text-[#999ca4] mr-2`}
            >
              01
            </span>
            <h3
              id="pickTitle"
              className={`max-[580px]:col-[1_/_span_12] max-[580px]:self-center max-[580px]:justify-self-center max-[890px]:col-[1_/_7] max-[890px]:ml-[0.8rem] text-[1.2rem]`}
            >
              Pick your destination
            </h3>
          </div>
          <section className="img-box col-[1_/_span_12] min-[890px]:col-[3_/_6] row-[2_/_span_1] self-center justify-self-center">
            <img
              src="assets/destination/image-moon.webp"
              alt="planet image"
              className={`w-60 min-[580px]:w-80 self-center min-[890px]:w-[25rem]`}
            />
          </section>
          <section className="detail-box col-[-2/_8] row-[2_/_span_1] self-center justify-self-center max-[890px]:flex max-[890px]:flex-col max-[890px]:col-[1_/_span_12] max-[890px]:row-[3_/_span_1] max-[890px]:w-[90%] max-[890px]:text-center max-[890px]:justify-center max-[890px]:items-center">
            <div className="destination-box flex gap-8 text-[1.2rem]">
              <DestinationNavbar />
            </div>
            <h2 id="principalTitle">Moon</h2>
            <div className="text-destination w-[90%] pb-8 border-b-[#d0d6f9] border-b border-solid">
              <p>
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
            </div>
            <div className="duree-box flex gap-4 pt-4 max-[890px]:mb-8 max-[580px]:flex-col">
              <div className="distance">
                <h5 className="text-[0.85rem]">Avg. Distance</h5>
                <h4 className="text-[1.75rem]">384,400 km</h4>
              </div>
              <div className="temps">
                <h5 className="text-[0.85rem]">Est. travel time</h5>
                <h4 className="text-[1.75rem]">3 days</h4>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="loader absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"></div>
      )}
    </main>
  );
}
