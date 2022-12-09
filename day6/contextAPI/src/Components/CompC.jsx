import React from "react";
import { FirstName, LastName } from "../App";

const CompC = () => {
  return (
    <>
      <FirstName.Consumer>
        {(fname) => (
          <LastName.Consumer>
            {(lname) => <h1>Hello {fname} {lname}</h1>}
          </LastName.Consumer>
        )}
      </FirstName.Consumer>
    </>
  );
};

export default CompC;
