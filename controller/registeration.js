import express from "express";
import { getAllRegistrations as getAllRegistrationsService, getRegistrationById as getRegistrationByIdService, createRegistration as createRegistrationService, updateRegistration as updateRegistrationService, deleteRegistration as deleteRegistrationService } from "../services/registrationService.js";
import { registrationSchema } from "../validation/registration.validation.js";
const router = express.Router();

async function getAllRegistrations(req,res){
    try {
        const result = await getAllRegistrationsService();
        res.status(200).json({
            message: "Registrations retrieved successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

async function getRegistrationById(req,res){
    const {id} = req.params;
    try {
        const result = await getRegistrationByIdService(id);
        if (!result) {
            return res.status(404).json({
                error: "Registration not found"
            })
        }
        res.status(200).json({
            message: "Registration retrieved successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

async function createRegistration(req,res){
    const {student_id, course_id, semester} = req.body;
    try {
        const validatedData = registrationSchema.parse({student_id, course_id, semester});
        const result = await createRegistrationService(validatedData.student_id, validatedData.course_id, validatedData.semester);
        res.status(201).json({
            message: "Registration created successfully",
            data: result
        })
    }catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

async function updateRegistration(req,res){
    const {id} = req.params;
    const {student_id, course_id, semester} = req.body;
    try {
        const validatedData = registrationSchema.parse({student_id, course_id, semester});
        const success = await updateRegistrationService(id, validatedData.student_id, validatedData.course_id, validatedData.semester);
        if (!success) {
            return res.status(404).json({
                error: "Registration not found"
            })
        }
        res.status(200).json({
            message: "Registration updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

async function deleteRegistration(req,res){
    const {id} = req.params;
    try {
        const success = await deleteRegistrationService(id);
        if (!success) {
            return res.status(404).json({
                error: "Registration not found"
            })
        }
        res.status(200).json({
            message: "Registration deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export {getAllRegistrations, getRegistrationById, createRegistration, updateRegistration, deleteRegistration}