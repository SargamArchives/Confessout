import React, { useEffect } from "react";
import { InboxInIcon, DocumentDuplicateIcon } from "@heroicons/react/outline";
import users from "../data";

function Profile() {
  const username = "sargam";
  const url = location.origin;
  const fullUrl = `${url}/u/${username}`;

  const copyText = () => {
    navigator.clipboard.writeText(fullUrl);
  };

  useEffect(() => {
    document.title = `Confessout - ${username}`;
    return () => (document.title = "Confessout");
  });

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
              {users.map((user, index) => (
                <li key={index}>
                  <div id={index} className="font-bold text-2xl">
                    {user.user}
                  </div>
                  <div>{user.message}</div>
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
