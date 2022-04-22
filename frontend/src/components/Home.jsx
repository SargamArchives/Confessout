import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = `Confessout - Home`;
    return () => (document.title = "Confessout");
  });
  return <div>Home</div>;
}

export default Home;
