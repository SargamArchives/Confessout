import React from "react";
import { useEffect } from "react/cjs/react.development";

function Profile() {
  const username = "sargam";
  const url = location.origin;
  useEffect(() => {
    document.title = `Confessout - ${username}`;
    return () => (document.title = "Confessout");
  });

  return (
    <section className="container">
      <h1>Hey, {username}</h1>
      <p>
        Here is your publick link:
        <span className="text-red-500">{`${url}/${username}`}</span>
      </p>
      <p>Share your link</p>
      <a href={`https://www.facebook.com/sharer/?u=${url}/${username}`}>
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          style={{ backgroundColor: "#1877f2" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="w-4 h-4"
          >
            <path
              fill="currentColor"
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            />
          </svg>
        </button>
      </a>
    </section>
  );
}

export default Profile;
