import React from "react";
import Counter from "./Counter";
import "../../../App.css" ;



export default function CountUpComponent() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="grid grid-cols-3 gap-8 text-center">
        <Counter number={105} title="Donations" />
        <Counter number={20175} title="Fund Raised" prefix="GHS " />
        <Counter number={468} title="Life Imparted" />
      </div>
    </div>
  );
}
