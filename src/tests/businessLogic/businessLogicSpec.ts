import imageResize from '../../businessLogic/imageResize'

describe('Test image resize class', () => {
    //check if file exist return true
    it('check if file exist must return true', () => {
        const IR = new imageResize(100, 100, 'tree')
        expect(IR.checkIfOutFileExist()).toBe(true)
    })
})
