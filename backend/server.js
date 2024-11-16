import express from "express"

const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
    res.send("Welcome to Bill of Materials system")
})

app.listen(PORT, ()=>{
    console.log(`Express stated on http://localhost:${PORT} \n`
        + `Press Ctrl+C to terminate.`
    )
})