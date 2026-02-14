import express from "express";
import { createCourse, getCourses, getCourseById, updateCourse, deleteCourse } from "../controller/course.js";
import { getAllRegistrations, getRegistrationById, createRegistration, updateRegistration, deleteRegistration } from "../controller/registeration.js";
import { newUser, getUsers, getUserById, updateUser, deleteUser } from "../controller/user.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       required:
 *         - course_code
 *         - title
 *         - credit_unit
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the course
 *         course_code:
 *           type: string
 *           description: The course code
 *         title:
 *           type: string
 *           description: The course title
 *         credit_unit:
 *           type: integer
 *           description: The credit unit
 *           minimum: 1
 *         created_at:
 *           type: string
 *           format: date-time
 *     Registration:
 *       type: object
 *       required:
 *         - student_id
 *         - course_id
 *         - semester
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the registration
 *         student_id:
 *           type: integer
 *           description: The id of the student
 *         course_id:
 *           type: string
 *           description: The id of the course
 *         semester:
 *           type: string
 *           description: The semester
 *         created_at:
 *           type: string
 *           format: date-time
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - department
 *         - matric_no
 *         - matric
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The user name
 *         department:
 *           type: string
 *           description: The user department
 *         matric_no:
 *           type: string
 *           description: The matric number
 *         created_at:
 *           type: string
 *           format: date-time
 */

// Course routes

/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: The courses managing API
 */

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: The course was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       400:
 *         description: Bad request
 */
router.post("/courses", createCourse);

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Returns the list of all the courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: The list of the courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 */
router.get("/courses", getCourses);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get the course by id
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course id
 *     responses:
 *       200:
 *         description: The course description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 *       404:
 *         description: The course was not found
 */
router.get("/courses/:id", getCourseById);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update the course by the id
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: The course was updated
 *       404:
 *         description: The course was not found
 */
router.put("/courses/:id", updateCourse);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Remove the course by id
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The course id
 *     responses:
 *       200:
 *         description: The course was deleted
 *       404:
 *         description: The course was not found
 */
router.delete("/courses/:id", deleteCourse);

// Registration routes

/**
 * @swagger
 * tags:
 *   name: Registrations
 *   description: The registration managing API
 */

/**
 * @swagger
 * /registrations:
 *   post:
 *     summary: Create a new registration
 *     tags: [Registrations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Registration'
 *     responses:
 *       201:
 *         description: The registration was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Registration'
 *       400:
 *         description: Bad request
 */
router.post("/registrations", createRegistration);

/**
 * @swagger
 * /registrations:
 *   get:
 *     summary: Returns the list of all the registrations
 *     tags: [Registrations]
 *     responses:
 *       200:
 *         description: The list of the registrations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Registration'
 */
router.get("/registrations", getAllRegistrations);

/**
 * @swagger
 * /registrations/{id}:
 *   get:
 *     summary: Get the registration by id
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The registration id
 *     responses:
 *       200:
 *         description: The registration description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Registration'
 *       404:
 *         description: The registration was not found
 */
router.get("/registrations/:id", getRegistrationById);

/**
 * @swagger
 * /registrations/{id}:
 *   put:
 *     summary: Update the registration by the id
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The registration id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Registration'
 *     responses:
 *       200:
 *         description: The registration was updated
 *       404:
 *         description: The registration was not found
 */
router.put("/registrations/:id", updateRegistration);

/**
 * @swagger
 * /registrations/{id}:
 *   delete:
 *     summary: Remove the registration by id
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The registration id
 *     responses:
 *       200:
 *         description: The registration was deleted
 *       404:
 *         description: The registration was not found
 */
router.delete("/registrations/:id", deleteRegistration);

// User/Student routes

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The user/student managing API
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user (student)
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - department
 *               - matric
 *             properties:
 *               name:
 *                 type: string
 *               department:
 *                 type: string
 *               matric:
 *                 type: string
 *     responses:
 *       201:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request
 */
router.post("/users", newUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/users", getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 */
router.get("/users/:id", getUserById);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update the user by the id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The user was updated
 *       404:
 *         description: The user was not found
 */
router.put("/users/:id", updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove the user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
router.delete("/users/:id", deleteUser);

export default router;
