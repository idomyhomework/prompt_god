import express from 'express'


const expressApp = express()
expressApp.get('/ping', (req, res) =>{
    res.send('pong')
})

expressApp.listen(8080, ()=>{
    console.info('Listening at http://localhost:8080')
})
 
// need to change the ts.config