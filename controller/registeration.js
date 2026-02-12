import express from "express";
import { registrationSchema } from "../validation/registration.validation.js";
const router = express.Router();

async function getAllRegistrations(req,res){

}

async function getRegistrationById(req,res){

}

async function createRegistration(req,res){
    const {student_id, course_id, semester} = req.body;
    try {
        const validatedData = registrationSchema.parse({student_id, course_id, semester});
        res.status(201).json({
            message: "Registration created successfully",
            data: validatedData
        })
    }catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

async function updateRegistration(req,res){

}

async function deleteRegistration(req,res){

}

export {getAllRegistrations, getRegistrationById, createRegistration, updateRegistration, deleteRegistration}