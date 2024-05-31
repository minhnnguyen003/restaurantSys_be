import dotenv from 'dotenv';
import mysql from 'mysql';
//For env File 
dotenv.config();

export default abstract class DatabaseConnection {
    static #hostname?: string = process.env.HOST;
    static #db? : string = process.env.DB;
    static #username?: string = process.env.USER;
    static #password?: string = process.env.PASSWORD;
    
    private static createConnection() : mysql.Connection {
        const connection = mysql.createConnection({
            host: this.#hostname,
            user: this.#username,
            database: this.#db,
            password: this.#password,
        })

        return connection;
    } 

    public static query(query : string) : mysql.Query
    {
        const connection = this.createConnection();

        connection.connect((err) => {
            if(err) throw err;
        });

        console.log("DB Connect Successful");

        return connection.query(query)
    }
}