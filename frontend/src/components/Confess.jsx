import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Confess() {
  const { username } = useParams("username");
  const fetchPerson = async () => {
    const res = await fetch(`http://localhost:8000/api/v1/?u=${username}`);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  return <div>This is a confess element</div>;
}

export default Confess;
