import React from "react";
import CountUp from "react-countup";

const Counter = ({ number, title, prefix = "", suffix = "+" }) => {
  return (
    <div className="text-white text-center">
      <h2 className="text-3xl font-bold">
        <CountUp end={number} duration={3} prefix={prefix} suffix={suffix} />
      </h2>
      <p className="text-lg">{title}</p>
    </div>
  );
};

export default Counter;
