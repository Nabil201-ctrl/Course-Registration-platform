import express from "express";
import { createCourse,deleteCourse,updateCourse,getCourseById,getCourses } from "../services/courseService.js";
import { courseSchema } from "../validation/course.validation.js";
const router = express.Router();

async function createCourse(req,res){
    const {course_code, title, credit_unit} = req.body;
    try {
        const validatedData = courseSchema.parse({course_code, title, credit_unit});
        await createCourse(validatedData.course_code, validatedData.title, validatedData.credit_unit);
        res.status(201).json({
            message: "Course Created successfully"
        })
    }catch(error){
        res.status(400).json({
            error: error.message
        })
    }

}

async function getCourses(req,res){
    try {
        const result = await getCourses();
        return result

    }catch(err){
        console.log(err)
        throw new Error({
            message: "Error getting courses",
            err
        })
    }
}

async function getCourseById(req,res){
    const {id} = req.body();
    try {
        await getCourseById(id)
    } catch (err) {
        console.error('Error getting courses by id')
    }
}

async function updateCourse(req,res){
    
}

async function deleteCourse(req,res){

}

export {createCourse, getCourses, getCourseById, updateCourse, deleteCourse}