import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connect } from './model/index.js';
import router from './router/index.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use('/api', router);

connect()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on http://localhost:${process.env.PORT} `);
		});
	})
	.catch((err) => {
		console.log(`Server not running due to ${err}`);
	});
