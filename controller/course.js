import express from "express";
import { createCourse as createCourseService,deleteCourse as deleteCourseService,updateCourse as updateCourseService,getCourseById as getCourseByIdService,getCourses as getCoursesService } from "../services/courseService.js";
import { courseSchema } from "../validation/course.validation.js";
const router = express.Router();

async function createCourse(req,res){
    const {course_code, title, credit_unit} = req.body;
    try {
        const validatedData = courseSchema.parse({course_code, title, credit_unit});
        const result = await createCourseService(validatedData.course_code, validatedData.title, validatedData.credit_unit);
        res.status(201).json({
            message: "Course created successfully",
            data: result
        })
    }catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

async function getCourses(req,res){
    try {
        const result = await getCoursesService();
        res.status(200).json({
            message: "Courses retrieved successfully",
            data: result
        })
    }catch(err){
        res.status(500).json({
            error: err.message
        })
    }
}

async function getCourseById(req,res){
    const {id} = req.params;
    try {
        const result = await getCourseByIdService(id);
        if (!result) {
            return res.status(404).json({
                error: "Course not found"
            })
        }
        res.status(200).json({
            message: "Course retrieved successfully",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

async function updateCourse(req,res){
    const {id} = req.params;
    const {course_code, title, credit_unit} = req.body;
    try {
        const validatedData = courseSchema.parse({course_code, title, credit_unit});
        const success = await updateCourseService(id, validatedData.course_code, validatedData.title, validatedData.credit_unit);
        if (!success) {
            return res.status(404).json({
                error: "Course not found"
            })
        }
        res.status(200).json({
            message: "Course updated successfully"
        })
    } catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}

async function deleteCourse(req,res){
    const {id} = req.params;
    try {
        const success = await deleteCourseService(id);
        if (!success) {
            return res.status(404).json({
                error: "Course not found"
            })
        }
        res.status(200).json({
            message: "Course deleted successfully"
        })
    } catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

export {createCourse, getCourses, getCourseById, updateCourse, deleteCourse}