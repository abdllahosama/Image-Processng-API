import fs from 'fs-extra'
import sharp from 'sharp'

class imageResize {
    // main images dir
    private mainDir = './images/main'
    // output images dir
    public outputDir = './images/output'

    // get image width
    public imgWidth: number
    // get image height
    public imgHeight: number
    // get image name
    public image: string

    // output file
    public outFile: string

    //define image props on creating object
    public constructor(width: number, height: number, image: string) {
        this.imgWidth = width
        this.imgHeight = height
        this.image = image

        this.outFile =
            this.image + '_' + this.imgWidth + '_' + this.imgHeight + '.png'
    }

    // target file path
    public getTargetFilePath = (): string => {
        return this.mainDir + '/' + this.image + '.png'
    }

    // output file path
    public getOutFilePath = (): string => {
        return this.outputDir + '/' + this.outFile
    }

    // check if output path exists else create one
    public checkIfOutDireExist = (): void => {
        if (!fs.existsSync(this.outputDir)) fs.mkdirSync(this.outputDir)
    }

    // check if image is exist so we get it from cashe
    public checkIfOutFileExist = (): boolean => {
        const outFile = this.getOutFilePath()
        if (fs.existsSync(outFile)) return true
        else return false
    }

    /**
     * if image not exist serve will resize it
     * this function resize image if just is exist else load it from cash
     */
    public resizeImage = async (): Promise<void> => {
        // git target file
        const targetFile = this.getTargetFilePath()
        // get output file
        const outFile = this.getOutFilePath()

        // check if out dir exist or not then create it
        this.checkIfOutDireExist()

        // if file exist return it directly
        if (this.checkIfOutFileExist()) return

        //resize image if not exist
        await sharp(targetFile)
            .resize({
                width: this.imgWidth,
                height: this.imgHeight,
                fit: sharp.fit.cover,
            })
            .toFile(outFile)
    }
}

export default imageResize
