import React from "react";
import { useSelector } from "react-redux";

const CreateaOrder = () => {
  const { dishes } = useSelector((state) => state.dish);
  console.log(dishes);

  return <div className="row"></div>;
};

export default CreateaOrder;
