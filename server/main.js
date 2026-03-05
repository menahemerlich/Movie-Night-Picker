import express from 'express'
import cors from 'cors'
import data from './db/data.json'  with { type: 'json' }
import seats from './db/seats.json' with {type: 'json'}

const app = express()

app.use(cors())
app.use(express.json())

app.get("/data", async (req, res) => {
    try {
        res.status(200).json(data)
    } catch (error) {
        console.error(error);
    }
})

// app.get("/seats", async (req, res) => {
//     try {
//         res.status(200).json(seats)
//     } catch (error) {
//         console.error(error);
//     }
// })

app.listen(3030, () => {
    console.log('server runing...');
})