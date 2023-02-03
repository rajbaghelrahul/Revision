import React from "react";
// import { FirstName, LastName } from "../index";
import { useContext } from "react";
import { FirstName } from "..";


const CompC = () => {
  // we can use any of them below line no 9 10...
  const {firstName, lastName} = useContext(FirstName);
  const value2 = useContext(FirstName);
  return (
    <>


    <div>
        <h1>Hello {firstName} {lastName}.</h1>
        <h1>Hello again {value2.firstName} {value2.lastName}.</h1>
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
