import pg from "../config/config.js";

export const createUser = async (name, department, matric) => {
    const client = await pg.Pool.connect();
    try {
        const result = await client.query(
            'INSERT INTO users (name, department, matric_no) VALUES ($1, $2, $3) RETURNING *',
            [name, department, matric]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const getUsers = async () => {
    const client = await pg.Pool.connect();
    try {
        const result = await client.query('SELECT * FROM users');
        return result.rows;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const getUserById = async (id) => {
    const client = await pg.Pool.connect();
    try {
        const result = await client.query('SELECT * FROM users WHERE id = $1', [id]);
        return result.rows[0];
    } catch (error) {
        console.error("Error fetching user by id:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const updateUser = async (id, name, department, matric) => {
    const client = await pg.Pool.connect();
    try {
        const result = await client.query(
            'UPDATE users SET name = $1, department = $2, matric_no = $3 WHERE id = $4 RETURNING *',
            [name, department, matric, id]
        );
        return result.rowCount > 0;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    } finally {
        client.release();
    }
}

export const deleteUser = async (id) => {
    const client = await pg.Pool.connect();
    try {
        const result = await client.query('DELETE FROM users WHERE id = $1', [id]);
        return result.rowCount > 0;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    } finally {
        client.release();
    }
}
