const express = require('express')
const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)

const app = express()
app.get('/', async (req, res) => {
	try {
		const back = JSON.parse(await readFile('./db.json', 'utf-8'))
		res.send(back.users)
	} catch (error) {
		res.status(500).json({error})
	}
})
app.listen(3000, () => {
	console.log('http://127.0.0.1:3000')
})