import dotenv from 'dotenv'
dotenv.config()

import express, { json } from 'express'
import cors from 'cors'
import colors from 'colors'

const app = express()

// db connection
import connectDB from './config/db.js'
connectDB()

// routes setup
import todo from './routes/todo.js'
// routes use
app.use('/api/todo', todo)
// middleware begins
app.use(express.json())
app.get('/', (req, res) => res.send('Server up and running - middlewares'))

// port configuration
const PORT = process.env.PORT || 10001
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}!`.cyan)
})
