import express from "express";
import { createCourse,deleteCourse,updateCourse,getCourseById,getCourses } from "../services/courseService.js";
const router = express.Router();

async function createCourse(req,res){
    const {course_code, title, credit_unit} = req.body();
    try {
        await createCourse(course_code, title, credit_unit);
        res.status(201).json({
            message: "Course Created successfully"
        })
    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }

}

async function getCourses(req,res){
    try
}

async function getCourseById(req,res){

}

async function updateCourse(req,res){

}

async function deleteCourse(req,res){

}

export {createCourse, getCourses, getCourseById, updateCourse, deleteCourse}