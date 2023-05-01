import express from 'express';
import cors from 'cors';
import routes from './routes';

//const app = express();

//app.use(express.json());
 
// app.get('/coaches',(request,response) => {
//     // console.log("Acessou a rota coaches");
//     console.log(request.query);
//     const coaches =[
//         {name:'Teste', age:34},
//         {name:'Teste1', age:61},
//         {name:'Teste2', age:34}
//     ]; return response.json(coaches);
// });

//     app.post('/coaches',(request,response) => {
//         // console.log("Acessou a rota coaches");
//         console.log(request.body);
//         const coaches =[
//             {name:'Teste', age:34},
//         {name:'Teste1', age:61},
//         {name:'Teste2', age:34}
//         ];
//     return response.json(coaches);
// });
// app.delete('/coaches/:id',(request,response) => {
//     // console.log("Acessou a rota coaches");
//     console.log(request.params);
//     const coaches =[
//         {name:'Teste', age:34},
//         {name:'Teste1', age:61},
//         {name:'Teste2', age:34}
//     ];
// return response.json(coaches);
// });
// app.get('/',(request,response) => {
//      return response.json({message:'Hello World'});
// });
//localhost:3333/coaches
//app.listen(3335);
//select *from coaches
//knex(coaches).select('*');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);