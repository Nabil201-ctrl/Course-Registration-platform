import express from "express";
import { studentSchema } from "../validation/student.validation.js";
const router = express.Router();

async function newUser(req,res){
    const {name, department, matric} = req.body;
    try {
        const validatedData = studentSchema.parse({name, department, matric});
        res.status(201).json({
            message: "Student created successfully",
            data: validatedData
        })
    }catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

async function getUsers(req,res){

}

async function getUserById(req,res){

}

async function updateUser(req,res){

}

async function deleteUser(req,res){

}

export {newUser, getUsers, getUserById, updateUser, deleteUser}