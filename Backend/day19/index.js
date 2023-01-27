import express from "express";
import { getAllEmployee, getEmployee, addEmployee } from "./employees.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world! This is a test on home");
});

app.get("/employees", (req, res) => {
  try {
    // let {id} = req.params;
    // id = parseInt(id);
    const employees = getAllEmployee();
    res.status(200).send({
      status: "success",
      data: employees
    });
    
  } catch {
    return res.status(500).send({
      status: "error",
      error: "Not found in catch in employees",
    });
  }
  // res.send("Hello, world! This is a test on home");
});

app.get("/employee/:id", (req, res) => {
  try {
    // res.send("hello, world! This is a test on")
    let { id } = req.params;

    if (isNaN(parseInt(id))) {
      return res.status(400).send({
        status: "error",
        error: "Invalid Id",
      });
    } else {
      id = parseInt(id);
      const employee = getEmployee(id);

      if (employee) {
        return res.status(200).send({
          status: "success",
          data: employee,
        });
      } else {
        return res.status(404).send({
          status: "error",
          error: "Not found in try",
        });
      }
    }
  } catch {
    return res.status(500).send({
      status: "error",
      error: "Not found in catch",
    });
  }
});

app.post("/employee", (req, res) => {

  try {
    const data = req.body;
  
    if (data.name && data.designation && data.department) {
      const employee = addEmployee(data);
      return res.status(200).send({
        status: "success",
        data: employee,
      });
    }
    else {
      return res.status(404).send({
        status: "error",
        error: "Invalid request",
      });
    }    
  } catch {
    
    return res.status(500).send({
      status: "error",
      error: "Invalid request",
    });
  }
})
// app.post('/employee', (req, res) => {

//   const data = req.body;
//   // Joi
//   if (data.name && data.designation && data.department) {

//       const employee = addEmployee(data);
//       return res.status(200).send({
//           staus: 'success',
//           data: employee
//       })

//   } else {
//       return res.status(400).send({
//           status: 'error',
//           error: 'Incomplete data'
//       })
//   }
// })

app.listen(3000);

console.log("listening on http://localhost:3000");
