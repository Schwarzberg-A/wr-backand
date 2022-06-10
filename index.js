const express = require('express');
const PORT = process.env.PORT || 4000;
const authRouter = require('./authRouter');
const knex = require('knex')({
	client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_BASE_NAME,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD
  },
});


const app = express();
app.use(express.json())
app.use("/auth", authRouter)
app.use("/", 	async (req, res) => {
	try {
		res.send('test works')
	} catch (err) {
		console.error(err.message);
	}
})

const start = async () => {
	try {

		app.listen(PORT, () => {
			console.log(`lisnening to http://localhost:${PORT}`)
		})
	} catch(e) {
		console.error(e);
	}
}

start()