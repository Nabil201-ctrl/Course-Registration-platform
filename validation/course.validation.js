import zod from "zod";

export const courseSchema = zod.object({
    course_code: zod.string().min(1, "course_code is required"),
    title: zod.string().min(1, "title is required"),
    credit_unit: zod.number().positive("credit_unit must be a positive number")
})