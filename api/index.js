import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import 'dotenv/config'


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB!')
    })
    .catch((error) => {
        console.log(error)
    })


const app = express()

app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000!')
})

