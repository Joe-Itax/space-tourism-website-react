import { useState, useEffect } from "react";

import GlobalContext from "../../context/global-context";

export default function ContextProvider({ children }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) =>
        console.error("Erreur lors de la récuperation des donnés: ", err)
      );
  }, []);
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
