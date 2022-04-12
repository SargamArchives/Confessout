import React from "react";
import { useEffect } from "react/cjs/react.development";

function Home() {
  useEffect(() => {
    document.title = `Confessout - Home`;
    return () => (document.title = "Confessout");
  });
  return <div>Home</div>;
}

export default Home;
