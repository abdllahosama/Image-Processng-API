import imageResize from '../../businessLogic/imageResize'

describe('Test image resize class', (): void => {
    //check if file exist return true
    it('check if file exist must return true', async (): Promise<void> => {
        //create image for test if not exist
        const IR = new imageResize(100, 100, 'tree')
        await IR.resizeImage()

        expect(IR.checkIfOutFileExist()).toBe(true)
    })
})
