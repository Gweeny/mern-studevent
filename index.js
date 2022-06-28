const { response } = require('express')
const express = require('express')
const app = express()
const eventList = [
    {
        id:1,
        name: "EVENT 1",
        date: "01/01/01",


        id:2,
        name: "EVENT 2",
        date: "01/01/01"
    }
]

// Get all events
app.get('/events', (req, res) =>{
    res.send('get all events')
    res.send(eventList)
})

// Get one event

app.get('/events/:id', (req, res) =>{
    const event = eventList.find(event => event.id === parseInt(req.params.id))
    if (!event){
        res.status(404).send('event not found')
    } res.send(event)
    res.send('get one event by ID ')
})
// Create event
app.post('/events', (req,res) => {
    res.send('Create events')
})

app.listen(8000, () => {
    console.log("Running app express on port : 8000")
})