import express from "express";
import { getEmployees, getEmployees } from "../db/employees.js";
const router = express.Router();
export default router;

router.get("/", (req, res) => {
    const employees = getEmployees();

    res.send(employees);
});

router.get("/", (req, res) => {
    const { id } = req.params;
    const employee = getEmployee(+id);

    if (!employee) {
        return res.status(404).send(`Employee #${id} not found.`);
    }
    res.send(employee);
});

router.post("/", (req, res) => {
    if (!req.body) {
        return res.status(400).send("Request must have a body.");
    }

    const { name } = req.body;
    if (!name) {
        return res.status(400).send("Employee must have name.")
    }

    const employees = getEmployees();
    const newEmployee = {
        id: employees.length + 1, name
    };

    employees.push(newEmployee);
    res.status(201).send(newEmployee);
});