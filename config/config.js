import pg from "pg";

const Pool = new pg.Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "password",
    database: "course-registration"
})

export default { Pool };