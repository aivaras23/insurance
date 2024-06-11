
import express, { Application, Response, Request } from 'express';

console.log('serveris running');
const app:Application=express();

app.use( (req:Request, res:Response) =>{
    res.send('Express works');
})

app.listen(3000, ()=>{
    console.log('express running on port 3000');
    
})