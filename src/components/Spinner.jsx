import React from "react";

const Spinner = () => {

  return (
    <div className="content scale-50 md:scale-100 top-52 left-0  sm:left-[20%] md:left-[35%]">
      <div className="planet">
        <div className="ring" />
        <div className="cover-ring" />
        <div className="spots">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <p>loading</p>
    </div>
  );
};

export default Spinner;
