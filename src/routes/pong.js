import express from 'express'
const router = express.Router()

router.post('/', (req, res) => {
    const { data } = req.body
    if (data === 'ping') {
        res.status(200).send('pong')
        return
    }
    res.status(400).send(`Plz send me ping, not ${data}`)
})

export default router
