import zod from "zod";

export const studentSchema = zod.object({
    name: zod.string().min(1, "name is required"),
    department: zod.string().min(1, "department is required"),
    matric: zod.string().min(1, "matric is required")
})