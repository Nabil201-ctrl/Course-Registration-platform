import {Pool} from "/config/config.js";

export const createCourse = async ( course_code,
    title, credit_unit) => {
        const client = await Pool.connect();
        try {
            const result = await client.query(
                'INSERT INTO courses (course_code, title, credit_unit) VALUES ($1, $2, $3)',
                [course_code, title, credit_unit]
            )
        }catch (error) {
        console.error("Error creating course:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const getCourses = async () => {
    const client = await Pool.connect();
    try {
        const result = await client.query('SELECT * FROM courses');
        return result.rows;
    }catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const getCourseById = async (id) => {
    const client = await Pool.connect();
    try {
        const result = await client.query('SELECT * FROM courses WHERE id = $1', [id]);
        return result.rows[0];
    }catch (error){
        console.error("Error fetching course by id:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const updateCourse = async (id, course_code, title, credit_unit) => {
    const client = await Pool.connect();
    try {
        const result = await client.query(
            'UPDATE courses SET course_code = $1,title = $2, credit_unit = $3 WHERE id = $4',
            [course_code, title, credit_unit, id]
        )
    }catch(error){
        console.log("Error updating course:",error);
        throw error;
    }finally{
        client.release();
    }
}

export const deleteCourse = async (id) => {
    const client = await Pool.connect();
    try {
        const result = await client.query('DELETE FROM courses WHERE id = $1', [id]);
        return result.rowCount > 0;
    }catch (error){
        console.error("Error deleting course:", error);
        throw error;
    }finally {
        client.release();
    }
}