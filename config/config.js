import pg from "pg";


const  pg = new pg.Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "password",
    database: "course-registration"
})

export default pg;