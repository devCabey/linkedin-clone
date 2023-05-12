import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connect } from './model/index.js';

const app = express();

app.use(cors());
app.use(morgan('tiny'));

connect()
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log(`Server is running on http://localhost:${process.env.PORT} `);
		});
	})
	.catch((err) => {
		console.log(`Server not running due to ${err}`);
	});
