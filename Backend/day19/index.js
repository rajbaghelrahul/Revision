
import express from 'express';
import { getEmployee } from './employees.js';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello, world! This is a test on home");
})

app.get('/employee/:id', (req, res) => {

    try {

        let {id} = req.params;
    
        if(isNaN(parseInt(id))) {
            return res.status(400).send({
                status: "error",
                error: "Invalid Id"
            })
        }
        else {
            id = parseInt(id);
            const employee = getEmployee(id);
            
            if(employee) {
                return res.status(200).send({
                    status: "success",
                    data: id
                })
            }
            else {
                return res.status(404).send({
                    status: "error",
                    error: "Not found in try"
                })
            }
        }

    }
    catch {
        return res.status(500).send({
            status: "error",
            error: "Not found in catch"
        })
    }
})

app.listen(3000);

console.log("listening on http://localhost:3000");