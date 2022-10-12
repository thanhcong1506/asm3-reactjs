import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  return (
    <div>
      <h1>Detail</h1>
      <p>{params.id}</p>
    </div>
  );
};

export default Detail;
