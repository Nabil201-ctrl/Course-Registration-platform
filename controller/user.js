import express from "express";
import { createUser, getUsers as getUsersService, getUserById as getUserByIdService, updateUser as updateUserService, deleteUser as deleteUserService } from "../services/userService.js";
import { studentSchema } from "../validation/student.validation.js";
const router = express.Router();

async function newUser(req,res){
    const {name, department, matric} = req.body;
    try {
        const validatedData = studentSchema.parse({name, department, matric});
        const result = await createUser(validatedData.name, validatedData.department, validatedData.matric);
        res.status(201).json({
            message: "Student created successfully",
            data: result
        })
    }catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

async function getUsers(req,res){
    try {
        const result = await getUsersService();
        res.status(200).json({
            message: "Students retrieved successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

async function getUserById(req,res){
    const {id} = req.params;
    try {
        const result = await getUserByIdService(id);
        if (!result) {
            return res.status(404).json({
                error: "Student not found"
            })
        }
        res.status(200).json({
            message: "Student retrieved successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

async function updateUser(req,res){
    const {id} = req.params;
    const {name, department, matric} = req.body;
    try {
        const validatedData = studentSchema.parse({name, department, matric});
        const success = await updateUserService(id, validatedData.name, validatedData.department, validatedData.matric);
        if (!success) {
            return res.status(404).json({
                error: "Student not found"
            })
        }
        res.status(200).json({
            message: "Student updated successfully"
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

async function deleteUser(req,res){
    const {id} = req.params;
    try {
        const success = await deleteUserService(id);
        if (!success) {
            return res.status(404).json({
                error: "Student not found"
            })
        }
        res.status(200).json({
            message: "Student deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

export {newUser, getUsers, getUserById, updateUser, deleteUser}