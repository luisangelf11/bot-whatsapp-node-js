import express from 'express'
import morgan from 'morgan';
import whatsapp from './lib/whatsapp.js'
import messageRoutes from './routes/message.routes.js'

//Initializations
const app = express();

//Settings
app.set('PORT', 3000 || process.env.PORT);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Rutes
app.use(messageRoutes);

//Initialize Whatsapp Service
whatsapp.initialize();

//Run server
app.listen(app.get('PORT'), () =>
    console.log(`Server is listening on port`, app.get('PORT')));
