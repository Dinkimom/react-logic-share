import express from 'express';
import morgan from 'morgan';
import './db';
import { router } from './routes';
import cors from 'cors';

const PORT = 3001;

const app = express();

app.use(cors());
app.use(morgan('tiny'));

app.use('/api', router);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
