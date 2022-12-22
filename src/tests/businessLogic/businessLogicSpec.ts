import imageResize from '../../businessLogic/imageResize'

describe('Test image resize class', (): void => {
    //check if file exist return true
    it('check if file exist must return true', (): Promise<void> => {
        const IR = new imageResize(100, 100, 'tree')
        expect(IR.checkIfOutFileExist()).toBe(true)
    })
})
