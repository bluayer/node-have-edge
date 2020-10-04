import express from 'express'

import { pongRouter } from './routes'

const app = express()
const port = process.env.PORT | 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', pongRouter)

app.listen( port, () => {
    console.log(`Listening at ${port}`)
})
