import express from 'express';
import cors from 'cors';
import router from './routes/route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
