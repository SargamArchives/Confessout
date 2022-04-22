import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = `Confessout - Home`;
    return () => (document.title = "Confessout");
  });
  return (
    <div className="container max-w-3xl mx-auto">
      <h1 className="text-2xl py-3">
        Project work for the computer practical class XII
      </h1>
      <ul className="flex flex-col gap-2 ">
        <h2 className="text-xl">Created with</h2>
        <li>{"-> "} React</li>
        <li>{"-> "}Flask</li>
        <li>{"-> "}Tailwind Css</li>
        <li>{"-> "}Flask</li>
      </ul>
      <h2 className="text-2xl">What is this website for?</h2>
      <p>
        This website is for sharing your views and feelings to someone whom you
        could not in all these years.
      </p>
    </div>
  );
}

export default Home;
