import express from 'express'
import image from './api/image'

// call express router
const routes = express.Router()

//append routs that comes from image with `image` group
routes.use('/image', image)

export default routes
