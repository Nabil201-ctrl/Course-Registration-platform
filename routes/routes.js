import express from "express";
import { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } from "../controller/course.js";
import { getAllRegistrations, getRegistrationById, createRegistration, updateRegistration, deleteRegistration } from "../controller/registeration.js";
import { newUser, getUsers, getUserById, updateUser, deleteUser } from "../controller/user.js";

const router = express.Router();

// Course routes
router.post("/courses", createCourse);
router.get("/courses", getCourses);
router.get("/courses/:id", getCourseById);
router.put("/courses/:id", updateCourse);
router.delete("/courses/:id", deleteCourse);

// Registration routes
router.post("/registrations", createRegistration);
router.get("/registrations", getAllRegistrations);
router.get("/registrations/:id", getRegistrationById);
router.put("/registrations/:id", updateRegistration);
router.delete("/registrations/:id", deleteRegistration);

// User/Student routes
router.post("/users", newUser);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
