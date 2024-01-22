import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openNavMobile = () => {
    setIsOpen(true);

    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {isMobile ? (
        // Rendu pour mobile
        <header
          className={`col-[1_/_span_12] row-[1_/_2] grid grid-cols-[repeat(12,1fr)] grid-rows-[repeat(4,1fr)] z-[9999]`}
        >
          <NavLink
            to="/"
            className={`col-[2_/_span_1] row-[2_/_span_2] self-center justify-self-end`}
          >
            <img
              className="logo max-w-[50px]"
              src="assets/shared/logo.svg"
              alt="Logo du site"
            />
          </NavLink>
          {isOpen ? (
            <img
              className="iconHamburger cursor-pointer col-[-3_/_span_1] row-[2_/_span_2] self-center justify-self-center w-[37px] z-[999]"
              id="iconHamburger"
              src="assets/shared/icon-close.svg"
              alt="icon close"
              onClick={openNavMobile}
            />
          ) : (
            <img
              className="iconHamburger cursor-pointer col-[-3_/_span_1] row-[2_/_span_2] self-center justify-self-center w-[37px] z-[999]"
              id="iconHamburger"
              src="assets/shared/icon-hamburger.svg"
              alt="icon hamburger"
              onClick={openNavMobile}
            />
          )}
          <nav
            className={`navMobile absolute backdrop-blur-[50px] h-full w-[85%] shadow-[0px_0px_7px_0px_rgba(255,255,255,0.1)] p-8 right-0 top-0 z-[1] transition-all duration-[.3s] ${
              !isOpen ? "-left-full" : "right-[0]"
            }`}
          >
            <ul className={`flex flex-col gap-12 pt-28`}>
              <li className={`text-base`}>
                <NavLink
                  to="/"
                  className={`text-white no-underline uppercase tracking-[4.75px] px-0 py-[0.4rem] hover:border-b-2 hover:border-b-[#979797] hover:border-solid`}
                >
                  <span className="numNav font-[bold] mr-[0.7rem]">01</span>Home
                </NavLink>
              </li>
              <li className={`text-base`}>
                <NavLink
                  to="/destination"
                  className={`text-white no-underline uppercase tracking-[4.75px] px-0 py-[0.4rem] hover:border-b-2 hover:border-b-[#979797] hover:border-solid`}
                >
                  <span className="numNav font-[bold] mr-[0.7rem]">02</span>
                  Destination
                </NavLink>
              </li>
              <li className={`text-base`}>
                <NavLink
                  to="/crew"
                  className={`text-white no-underline uppercase tracking-[4.75px] px-0 py-[0.4rem] hover:border-b-2 hover:border-b-[#979797] hover:border-solid`}
                >
                  <span className="numNav font-[bold] mr-[0.7rem]">03</span>Crew
                </NavLink>
              </li>
              <li className={`text-base`}>
                <NavLink
                  to="/technology"
                  className={`text-white no-underline uppercase tracking-[4.75px] px-0 py-[0.4rem] hover:border-b-2 hover:border-b-[#979797] hover:border-solid`}
                >
                  <span className="numNav font-[bold] mr-[0.7rem]">04</span>
                  Technology
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      ) : (
        // Rendu pour desktop
        <header
          className={`col-[1_/_span_12] row-[1_/_2] grid grid-cols-[repeat(12,1fr)] grid-rows-[repeat(4,1fr)] z-[9999]`}
        >
          <NavLink
            to="/"
            className={`col-[3_/_span_1] row-[2_/_span_2] self-center justify-self-end`}
          >
            <img
              className="logo max-w-[50px]"
              src="assets/shared/logo.svg"
              alt="Logo du site"
            />
          </NavLink>
          <nav className="navNormal flex items-center p-8 sm:px-[2.3rem]  md:px-8 lg:px-16 row-[1_/_span_2] md:row-[2_/_span_2] col-[-1_/_span_7] bg-transparent backdrop-blur-[50px] shadow-[0px_0px_7px_0px_rgba(255,255,255,0.1)] text-center">
            <ul className={`flex gap-12 flex gap-12`}>
              <li className={`text-base`}>
                <NavLink
                  to="/"
                  className={`text-white no-underline uppercase tracking-[4.75px] px-0 py-[1.6rem] hover:border-b-2 hover:border-b-[#979797] hover:border-solid`}
                >
                  <span className="numNav font-[bold] mr-[0.7rem]">01</span>Home
                </NavLink>
              </li>
              <li className={`text-base`}>
                <NavLink
                  to="/destination"
                  className={`text-white no-underline uppercase tracking-[4.75px] px-0 py-[1.6rem] hover:border-b-2 hover:border-b-[#979797] hover:border-solid`}
                >
                  <span className="numNav font-[bold] mr-[0.7rem]">02</span>
                  Destination
                </NavLink>
              </li>
              <li className={`text-base`}>
                <NavLink
                  to="/crew"
                  className={`text-white no-underline uppercase tracking-[4.75px] px-0 py-[1.6rem] hover:border-b-2 hover:border-b-[#979797] hover:border-solid`}
                >
                  <span className="numNav font-[bold] mr-[0.7rem]">03</span>Crew
                </NavLink>
              </li>
              <li className={`text-base`}>
                <NavLink
                  to="/technology"
                  className={`text-white no-underline uppercase tracking-[4.75px] px-0 py-[1.6rem] hover:border-b-2 hover:border-b-[#979797] hover:border-solid`}
                >
                  <span className="numNav font-[bold] mr-[0.7rem]">04</span>
                  Technology
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}
