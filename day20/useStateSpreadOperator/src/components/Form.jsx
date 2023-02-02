import React from "react";
import { useState } from "react";

function Form() {
    const [form, setForm] = useState({
        "name": "",
        "age": null
    });

    function handle() {
        setForm({...form, name: "Raj Bahel"});
        // setForm({...form, age: 22});
    }

    function handle2() {
      setForm({...form, age: 23});
    }

  return (
    <>
      <h1>I'm {form.name}.</h1>
      <h1>I'm {form.age} years old.</h1>
      <button onClick={handle}>click</button>
      <button onClick={handle2}>click</button>
    </>
  );
};

export default Form;