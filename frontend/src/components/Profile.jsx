import React, { useEffect, useState } from "react";
import { InboxInIcon, DocumentDuplicateIcon } from "@heroicons/react/outline";
import { baseUrl } from "../default";

function Profile({ isLoggedIn }) {
  console.log(isLoggedIn);
  const url = location.origin;
  let username = localStorage.getItem("username ");
  const [fullUrl, setFullUrl] = useState(`${url}/u/${username}`);
  const [data, setData] = useState([]);

  const copyText = () => {
    navigator.clipboard.writeText(fullUrl);
  };

  useEffect(() => {
    if (isLoggedIn) {
      username = localStorage.getItem("username");
      setFullUrl(`${url}/u/${username}`);
      fetch_confesses();
    }
  }, [isLoggedIn]);

  const fetch_confesses = async () => {
    const res = await fetch(`${baseUrl}/get?u=${username}`);
    const data = await res.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    document.title = `Confessout - ${username}`;
    return () => (document.title = "Confessout");
  }, [username]);

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center w-screen">
        <section className="container  lg:p-20 sm:p-10">Login first</section>
      </div>
    );
  }

  return (
    <div className="flex justify-center w-screen">
      <section className="container  lg:p-20 sm:p-10">
        <div className="border-2 text-center ">
          <h1 className="text-3xl">
            Hey, <span className="underline ">{username}</span>
          </h1>
          <p className="my-2 lg:flex lg:flex-row justify-center gap-1 sm:flex-col">
            Here is your public link:
            <span className="text-red-500 underline decoration-red-500 decoration-2">
              <a href={fullUrl}>{fullUrl}</a>
            </span>
            <DocumentDuplicateIcon
              height={25}
              onClick={copyText}
              className="cursor-pointer active:text-green-500"
            />
          </p>
        </div>
        <article className="my-5 border-2 p-1">
          <div className="flex justify-center gap-4">
            <h1 className="text-2xl font-semibold font-mono text-center">
              Your received messages
            </h1>
            <InboxInIcon height={25} />
          </div>
          <section>
            <ul>
              {data.map((message, index) => (
                <li key={index} className="p-4 border-2 my-2">
                  <div className="font-bold text-2xl">{"Anynomous"}</div>
                  <div>{message}</div>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </section>
    </div>
  );
}

export default Profile;
