import { useState, useEffect } from "react";

import GlobalContext from "../../context/global-context";
import destinationsContext from "../../context/destinations-context";
import crewContext from "../../context/crew-context";
import technologyContext from "../../context/technology-context";

export default function ContextProvider({ children }) {
  const [destinations, setDestinations] = useState(null);
  const [crew, setCrew] = useState(null);
  const [technology, setTechnology] = useState(null);
  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data.destinations);
        setCrew(data.crew);
        setTechnology(data.technology);
      })
      .catch((err) =>
        console.error("Erreur lors de la récuperation des donnés: ", err),
      );
  }, []);
  return (
    <technologyContext.Provider value={technology}>
      <crewContext.Provider value={crew}>
        <destinationsContext.Provider value={destinations}>
          {children}
        </destinationsContext.Provider>
      </crewContext.Provider>
    </technologyContext.Provider>
  );
}
