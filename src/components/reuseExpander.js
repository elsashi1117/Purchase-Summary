import React from "react";

const Expander = ({ isClicked, click, noClickText, clickedText, children }) => (
  <div className="row p-1">
    <div className="col-xs-12" onClick={click}>
      {isClicked ? (
        <span>
          <u className="mr-2">{noClickText}</u> -
        </span>
      ) : (
        <span>
          <u className="mr-2">{clickedText}</u> +
        </span>
      )}
    </div>
    {children}
  </div>
);

export default Expander;
