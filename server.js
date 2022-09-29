import express from 'express'
import expressLayouts from 'express-ejs-layouts'
const app = express()

import dotenv from 'dotenv'
dotenv.config()

import recipeRouter from './routes/appRoutes.js'

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(expressLayouts)

app.use('/', recipeRouter)

app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

const port = process.env.PORT || 6000

app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
}) 