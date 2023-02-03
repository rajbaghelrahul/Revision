import React from "react";
// import { FirstName, LastName } from "../index";
import { useContext } from "react";
import { FirstName } from "..";


const CompC = () => {
  const {firstName, lastName} = useContext(FirstName);
  // const value2 = useContext(LastName);
  return (
    <>


    <div>
        <h1>Hello {firstName} {lastName}.</h1>
    </div>


      {/* <FirstName.Consumer>
        {(fname) => (
          <LastName.Consumer>
            {(lname) => <h1>Hello {fname} {lname}</h1>}
          </LastName.Consumer>
        )}
      </FirstName.Consumer> */}
    </>
  );
};

export default CompC;
