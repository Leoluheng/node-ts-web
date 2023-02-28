import express, {Express, Request, Response} from "express"

const port = 5000

const app = express()


app.get("/hello", (req : Request, res : Response) => {
    res.json({"greetings": "Hello World!!!!"})
})

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.get("/hi", (req, res) => {
    res.json({"text": "HIIIIIIIIIIIIII, my name is Leo"})
})

app.listen(port, () => { console.log(`Server started on port ${port}`) })

