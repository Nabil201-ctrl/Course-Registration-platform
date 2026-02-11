import zod from "zod";

export const registrationSchema = zod.object({
    student_id: zod.string().min(1, "student_id is required"),
    course_id: zod.string().min(1, "course_id is required"),
    semester: zod.string().min(1, "semester is required")
    
})