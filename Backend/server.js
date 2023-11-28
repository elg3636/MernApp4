import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config } from 'dotenv';
import router from './router/route.js';

/**import database connection */
import connect from './database/connection.js';

const app = express()



/** app middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** app port */
const port= process.env.PORT || 8080;


/** routes */

app.use('/api', router) /** access APIs */
app.get('/', (req, res) => {
    try{
        res.json("Get request")

    } catch(error){
        res.json(error)
    }
})

/** start server when valid database connection */
connect().then(() => {
    try{
        app.listen(port, () =>{
            console.log(`Server connected to http://localhost:${port}`)
        })
    } catch(error){
        console.log("Cannot connect to the server");

    }

}).catch(error => {
    console.log("Invalid database connection")
})

 






