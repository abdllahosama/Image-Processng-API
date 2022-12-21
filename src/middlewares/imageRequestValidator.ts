import express from 'express'
import fs from 'fs-extra'

/**
 * this method validate if requst query has valid data
 * data must be as follow
 * 1- width: must be number bigger than 0
 * 2- height: must be number bigger than 0
 * 3- image: must be sting and must be in  ./image/main dir
 */
const linkValidator = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
): void => {
    // get query from request
    const query = req.query

    //check if width exist and if width is bigger than 0
    if (!query.width || Number(query.width) <= 0)
        throw new Error('width must be bigger than 0')

    //check if height exist and if width is bigger than 0
    if (!query.height || Number(query.height) <= 0)
        throw new Error('height must be bigger than 0')

    //check if image is exist
    if (!query.image) throw new Error('imge must be string!')

    //get target image path
    const file: string = './images/main/' + query.image + '.png'
    //check if image in ./image/main dir
    if (!fs.existsSync(file)) throw new Error('imge not found!')

    //return next request
    next()
}

export default linkValidator
