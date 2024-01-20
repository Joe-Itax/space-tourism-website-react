import { useContext } from "react";

import globalContext from "../context/global-context";

export default function Home() {
  // Test The global context
  const data = useContext(globalContext);
  console.log(data.destinations);
  return (
    <div>
      <h1>Bienvenue sur le site Space Tourism</h1>
    </div>
  );
}
