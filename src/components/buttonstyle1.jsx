import React from "react";

const buttonstyle1 = ({ text, onclick, disabled }) => {
  return (
    <div className="buttonstyle1" onclick={onclick} disabled={disabled}>
      {text}
    </div>
  );
};

export default buttonstyle1;
