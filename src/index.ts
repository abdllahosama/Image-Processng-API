import express from 'express'
import routes from './routes/index'
import errorHandler from './middlewares/errorHandler'
// init express
const app = express()
// port express will run throu
const port = 5000

//append routs that comes from image with `image` group
app.use('/api', routes)

// handel error for user
app.use(errorHandler)

//handel 404 request page
app.get('*', function (req, res) {
    res.status(404).send(
        'you may came here by mistake please use this link :5000/api/image?image={image-name}&width={image-width}&height={image-height}'
    )
})

//lunich server
app.listen(port, () => console.log(`Running on port ${port}`))

export default app
