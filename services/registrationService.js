import pg from "../config/config.js";

export const createRegistration = async (student_id, course_id, semester) => {
    const client = await pg.Pool.connect();
    try {
        const result = await client.query(
            'INSERT INTO registrations (student_id, course_id, semester) VALUES ($1, $2, $3) RETURNING *',
            [student_id, course_id, semester]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error creating registration:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const getAllRegistrations = async () => {
    const client = await pg.Pool.connect();
    try {
        const result = await client.query('SELECT * FROM registrations');
        return result.rows;
    } catch (error) {
        console.error("Error fetching registrations:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const getRegistrationById = async (id) => {
    const client = await pg.Pool.connect();
    try {
        const result = await client.query('SELECT * FROM registrations WHERE id = $1', [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error fetching registration by id:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const updateRegistration = async (id, student_id, course_id, semester) => {
    const client = await pg.Pool.connect();
    try {
        const result = await client.query(
            'UPDATE registrations SET student_id = $1, course_id = $2, semester = $3 WHERE id = $4 RETURNING *',
            [student_id, course_id, semester, id]
        );
        return result.rowCount > 0;
    } catch (error) {
        console.error("Error updating registration:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const deleteRegistration = async (id) => {
    const client = await pg.Pool.connect();
    try {
        const result = await client.query('DELETE FROM registrations WHERE id = $1', [id]);
        return result.rowCount > 0;
    } catch (error) {
        console.error("Error deleting registration:", error);
        throw error;
    } finally {
        client.release();
    }
}
