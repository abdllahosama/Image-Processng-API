import app from '../index'
import supertest from 'supertest'

const request = supertest(app)
describe('Test image api responce', (): void => {
    //check end point with all data
    it('check full data endpoint succrss', async (): Promise<void> => {
        const responce = await request.get(
            '/api/image?image=tree&height=400&width=500'
        )
        expect(responce.status).toBe(200)
    })

    //check end point without image it must fail
    it('check lost data endpoint fail without image', async (): Promise<void> => {
        const responce = await request.get('/api/image?height=400&width=500')
        expect(responce.status).toBe(400)
    })

    //check end point with width less than 1 must be fail
    it('check lost data endpoint fail with width less than 1', async (): Promise<void> => {
        const responce = await request.get(
            '/api/image?image=abdo&height=400&width=0'
        )
        expect(responce.status).toBe(400)
    })

    //check end point with height less than 1 must be fail
    it('check lost data endpoint fail with height less than 1', async (): Promise<void> => {
        const responce = await request.get(
            '/api/image?image=abdo&height=0&width=200'
        )
        expect(responce.status).toBe(400)
    })
})
