import express from 'express'
import imageRequestValidator from '../../middlewares/imageRequestValidator'
import imageResize from '../../businessLogic/imageResize'

// call express router
const routes = express.Router()

/**
 * this route get image data then it response with image
 * route hase meddleware `imageRequestValidator` that validate request data
 * reqired data fore this route :
 * 1- width: width of image and it must be number bigger than 0
 * 2- height: height of image and it must be number bigger than 0
 * 3- image: image name and it must be sting and must be in ./image/main dir
 */
routes.get('/', imageRequestValidator, async (req, res) => {
    // get data from requiest query
    const query = req.query

    // get image width from link then make it number
    const imgWidth = Number(query.width)
    // get image height from link then make it number
    const imgHeight = Number(query.height)
    // get image name from link
    const image = query.image as string

    //create image resize object and pass params
    const IR = new imageResize(imgWidth, imgHeight, image)

    // resize image and return it
    await IR.resizeImage()

    //return image data after complete
    res.status(200).sendFile(IR.outFile, { root: IR.outputDir })
})

export default routes
